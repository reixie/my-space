export interface FieldOptions {
  width: number;
  height: number;
  pixelRatio: number;
  ink: string;
  dark: boolean;
  reducedMotion: boolean;
  active: boolean;
  maxCells: number;
}

export type FieldInput =
  | { type: 'configure'; options: FieldOptions }
  | { type: 'move'; x: number; y: number }
  | { type: 'pulse'; x: number; y: number }
  | { type: 'leave' };

export type WorkerInput = FieldInput | {
  type: 'initialize';
  canvas: OffscreenCanvas;
  options: FieldOptions;
};

export interface AsciiField {
  handle(input: FieldInput): void;
  destroy(): void;
}
