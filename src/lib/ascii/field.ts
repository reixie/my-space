import type { AsciiField, FieldInput, FieldOptions } from './protocol';

type Surface = HTMLCanvasElement | OffscreenCanvas;
type Context = CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D;

interface Wave {
  x: number;
  y: number;
  born: number;
  strength: number;
  speed: number;
  lifetime: number;
  radius: number;
  width: number;
  fade: number;
}

const GLYPHS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.:+*/=-';
const GLYPH_WIDTH = 10;
const GLYPH_HEIGHT = 14;
const MAX_WAVES = 14;

function makeSurface(width: number, height: number): Surface {
  if (typeof OffscreenCanvas !== 'undefined') return new OffscreenCanvas(width, height);
  const surface = document.createElement('canvas');
  surface.width = width;
  surface.height = height;
  return surface;
}

/** Canvas-only renderer, shared by the worker and the lower-density fallback. */
export function createAsciiField(canvas: Surface, initial: FieldOptions): AsciiField | null {
  const context = canvas.getContext('2d', { alpha: true }) as Context | null;
  if (!context) return null;

  let options = initial;
  let atlas: Surface;
  let columns = 0;
  let rows = 0;
  let cellWidth = 8;
  let cellHeight = 14;
  let seeds = new Uint16Array(0);
  let weights = new Float32Array(0);
  let frame: number | ReturnType<typeof setTimeout> | null = null;
  let lastFrame = 0;
  let lastInput = -Infinity;
  let lastTrail = -Infinity;
  let pointerX = -1000;
  let pointerY = -1000;
  let pointerVisible = false;
  let destroyed = false;
  const waves: Wave[] = [];
  const usesAnimationFrame = typeof requestAnimationFrame === 'function';

  function buildAtlas() {
    const ratio = options.pixelRatio;
    atlas = makeSurface(Math.ceil(GLYPHS.length * GLYPH_WIDTH * ratio), Math.ceil(GLYPH_HEIGHT * ratio));
    const atlasContext = atlas.getContext('2d') as Context | null;
    if (!atlasContext) return;
    atlasContext.scale(ratio, ratio);
    atlasContext.fillStyle = options.ink;
    atlasContext.font = '10px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';
    atlasContext.textAlign = 'center';
    atlasContext.textBaseline = 'middle';
    for (let index = 0; index < GLYPHS.length; index++) {
      atlasContext.fillText(GLYPHS[index], (index + 0.5) * GLYPH_WIDTH, GLYPH_HEIGHT / 2);
    }
  }

  function resize() {
    canvas.width = Math.ceil(options.width * options.pixelRatio);
    canvas.height = Math.ceil(options.height * options.pixelRatio);
    context.setTransform(options.pixelRatio, 0, 0, options.pixelRatio, 0, 0);
    const scale = Math.max(1, Math.sqrt(options.width * options.height / (8 * 14 * options.maxCells)));
    cellWidth = 8 * scale;
    cellHeight = 14 * scale;
    columns = Math.ceil(options.width / cellWidth);
    rows = Math.ceil(options.height / cellHeight);
    seeds = new Uint16Array(columns * rows);
    weights = new Float32Array(columns * rows);
    for (let index = 0; index < seeds.length; index++) {
      const seed = Math.imul(index + 1, 2654435761) >>> 0;
      seeds[index] = seed % GLYPHS.length;
      weights[index] = 0.65 + (seed % 100) / 285;
    }
  }

  function addWave(x: number, y: number, now: number, strength: number, speed: number, lifetime: number) {
    if (waves.length >= MAX_WAVES) waves.shift();
    waves.push({ x, y, born: now, strength, speed, lifetime, radius: 0, width: 0, fade: 0 });
    lastInput = now;
  }

  function draw(now: number) {
    if (destroyed) return;
    const seconds = options.reducedMotion ? 0 : now / 1000;
    context.clearRect(0, 0, options.width, options.height);

    for (let index = waves.length - 1; index >= 0; index--) {
      const wave = waves[index];
      const age = (now - wave.born) / 1000;
      if (age > wave.lifetime) {
        waves.splice(index, 1);
        continue;
      }
      wave.radius = Math.max(0, age) * wave.speed;
      wave.width = 16 + Math.max(0, age) * 5;
      wave.fade = age < 0 ? 0 : wave.strength * (1 - age / wave.lifetime) ** 2;
    }

    const pointerFade = pointerVisible ? Math.max(0, 1 - (now - lastInput) / 900) : 0;
    const maxAlpha = options.dark ? 0.4 : 0.28;
    const glyphPhase = Math.floor(seconds * 2);
    const ratio = options.pixelRatio;
    const sourceWidth = GLYPH_WIDTH * ratio;
    const sourceHeight = GLYPH_HEIGHT * ratio;

    for (let row = 0; row < rows; row++) {
      const y = (row + 0.5) * cellHeight;
      for (let column = 0; column < columns; column++) {
        const index = row * columns + column;
        const x = (column + 0.5) * cellWidth;
        const flow = Math.sin(x * 0.009 + Math.sin(y * 0.006 + seconds * 0.2))
          * Math.cos(y * 0.013 - seconds * 0.12);
        let level = Math.max(0, flow - 0.12) * 0.12;

        for (const wave of waves) {
          const dx = x - wave.x;
          const dy = y - wave.y;
          const reach = wave.radius + wave.width * 2;
          if (Math.abs(dx) > reach || Math.abs(dy) > reach) continue;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const band = Math.abs(distance - wave.radius) / wave.width;
          if (band < 2) level += (1 - band / 2) ** 2 * wave.fade;
        }

        if (pointerFade > 0) {
          const distanceSquared = (x - pointerX) ** 2 + (y - pointerY) ** 2;
          if (distanceSquared < 10000) level += (1 - distanceSquared / 10000) ** 2 * pointerFade * 0.16;
        }

        const alpha = Math.min(1, level) * weights[index] * maxAlpha;
        if (alpha < 0.005) continue;
        const glyph = (seeds[index] + glyphPhase + Math.floor(level * 12)) % GLYPHS.length;
        context.globalAlpha = alpha;
        context.drawImage(
          atlas, glyph * sourceWidth, 0, sourceWidth, sourceHeight,
          x - GLYPH_WIDTH / 2, y - GLYPH_HEIGHT / 2, GLYPH_WIDTH, GLYPH_HEIGHT,
        );
      }
    }
    context.globalAlpha = 1;
  }

  function cancelFrame() {
    if (frame === null) return;
    if (usesAnimationFrame) cancelAnimationFrame(frame as number);
    else clearTimeout(frame as ReturnType<typeof setTimeout>);
    frame = null;
  }

  function scheduleFrame() {
    if (frame !== null || destroyed || !options.active || options.reducedMotion) return;
    frame = usesAnimationFrame
      ? requestAnimationFrame(tick)
      : setTimeout(() => tick(performance.now()), 1000 / 48);
  }

  function tick(now: number) {
    frame = null;
    if (destroyed || !options.active || options.reducedMotion) return;
    const frameRate = now - lastInput < 1600 ? 48 : 24;
    if (now - lastFrame >= 1000 / frameRate) {
      draw(now);
      lastFrame = now;
    }
    scheduleFrame();
  }

  function configure(next: FieldOptions) {
    const geometryChanged = next.width !== options.width || next.height !== options.height
      || next.pixelRatio !== options.pixelRatio || next.maxCells !== options.maxCells;
    const inkChanged = next.ink !== options.ink || next.pixelRatio !== options.pixelRatio;
    options = next;
    if (geometryChanged) resize();
    if (inkChanged) buildAtlas();
    if (next.reducedMotion) {
      waves.length = 0;
      pointerVisible = false;
    }
    if (!next.active || next.reducedMotion) cancelFrame();
    if (next.active) draw(performance.now());
    scheduleFrame();
  }

  function handle(input: FieldInput) {
    if (input.type === 'configure') {
      configure(input.options);
      return;
    }
    if (options.reducedMotion || !options.active) return;
    const now = performance.now();
    if (input.type === 'leave') {
      pointerVisible = false;
    } else if (input.type === 'pulse') {
      addWave(input.x, input.y, now, 1, 210, 2.8);
      addWave(input.x, input.y, now + 140, 0.48, 160, 2.4);
    } else {
      const distance = Math.hypot(input.x - pointerX, input.y - pointerY);
      pointerX = input.x;
      pointerY = input.y;
      pointerVisible = true;
      lastInput = now;
      if (now - lastTrail > 70 && distance > 3) {
        addWave(input.x, input.y, now, 0.4, 85, 1.4);
        lastTrail = now;
      }
    }
  }

  resize();
  buildAtlas();
  if (options.active) draw(performance.now());
  scheduleFrame();

  return {
    handle,
    destroy() {
      destroyed = true;
      cancelFrame();
      waves.length = 0;
      context.clearRect(0, 0, options.width, options.height);
    },
  };
}
