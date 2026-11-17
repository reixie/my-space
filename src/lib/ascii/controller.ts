import { createAsciiField } from './field';
import type { AsciiField, FieldInput, FieldOptions, WorkerInput } from './protocol';

/** Owns DOM events and lifecycle; the renderer owns all animation state. */
export function mountAsciiBackground(host: HTMLDivElement): () => void {
  const events = new AbortController();
  const appearance = window.matchMedia('(prefers-color-scheme: dark)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const coarsePointer = window.matchMedia('(pointer: coarse)');
  let canvas = document.createElement('canvas');
  host.replaceChildren(canvas);

  let worker: Worker | null = null;
  let fallback: AsciiField | null = null;
  let transferred = false;
  let disposed = false;
  let pointerFrame: number | null = null;
  let pendingPointer: { x: number; y: number } | null = null;

  function readOptions(): FieldOptions {
    const bounds = host.getBoundingClientRect();
    return {
      width: Math.max(1, bounds.width),
      height: Math.max(1, bounds.height),
      pixelRatio: Math.min(window.devicePixelRatio || 1, 1.5),
      ink: window.getComputedStyle(host).color,
      dark: appearance.matches,
      reducedMotion: reducedMotion.matches,
      active: !document.hidden,
      maxCells: coarsePointer.matches ? 2200 : 4800,
    };
  }

  let options = readOptions();

  function startFallback() {
    if (disposed || fallback) return;
    worker?.terminate();
    worker = null;
    if (transferred) {
      const replacement = document.createElement('canvas');
      canvas.replaceWith(replacement);
      canvas = replacement;
      transferred = false;
    }
    fallback = createAsciiField(canvas, { ...options, maxCells: Math.min(options.maxCells, 2600) });
  }

  function send(input: FieldInput) {
    if (disposed) return;
    if (worker) worker.postMessage(input);
    else if (input.type === 'configure') {
      fallback?.handle({ ...input, options: { ...input.options, maxCells: Math.min(input.options.maxCells, 2600) } });
    } else fallback?.handle(input);
  }

  try {
    if (typeof Worker === 'undefined' || typeof canvas.transferControlToOffscreen !== 'function') {
      startFallback();
    } else {
      worker = new Worker(new URL('./ascii.worker.ts', import.meta.url), { type: 'module', name: 'portfolio-ascii' });
      worker.onerror = startFallback;
      worker.onmessage = (event: MessageEvent<{ type: string }>) => {
        if (event.data.type === 'unavailable') startFallback();
      };
      const offscreen = canvas.transferControlToOffscreen();
      transferred = true;
      const input: WorkerInput = { type: 'initialize', canvas: offscreen, options };
      worker.postMessage(input, [offscreen]);
    }
  } catch {
    startFallback();
  }

  function configure() {
    options = readOptions();
    send({ type: 'configure', options });
  }

  window.addEventListener('pointermove', (event) => {
    if (options.reducedMotion || event.pointerType === 'touch') return;
    pendingPointer = { x: event.clientX, y: event.clientY };
    if (pointerFrame !== null) return;
    pointerFrame = requestAnimationFrame(() => {
      pointerFrame = null;
      if (pendingPointer) send({ type: 'move', ...pendingPointer });
      pendingPointer = null;
    });
  }, { passive: true, signal: events.signal });

  window.addEventListener('pointerdown', (event) => {
    if (!options.reducedMotion && event.button === 0) send({ type: 'pulse', x: event.clientX, y: event.clientY });
  }, { passive: true, signal: events.signal });

  document.documentElement.addEventListener('pointerleave', () => {
    if (pointerFrame !== null) cancelAnimationFrame(pointerFrame);
    pointerFrame = null;
    pendingPointer = null;
    send({ type: 'leave' });
  }, { passive: true, signal: events.signal });

  document.addEventListener('visibilitychange', configure, { signal: events.signal });
  window.addEventListener('resize', configure, { passive: true, signal: events.signal });
  appearance.addEventListener('change', configure, { signal: events.signal });
  reducedMotion.addEventListener('change', configure, { signal: events.signal });
  coarsePointer.addEventListener('change', configure, { signal: events.signal });
  const observer = new ResizeObserver(configure);
  observer.observe(host);

  return () => {
    disposed = true;
    events.abort();
    observer.disconnect();
    if (pointerFrame !== null) cancelAnimationFrame(pointerFrame);
    worker?.terminate();
    fallback?.destroy();
    canvas.remove();
  };
}
