import { createAsciiField } from './field';
import type { AsciiField, WorkerInput } from './protocol';

let field: AsciiField | null = null;

self.onmessage = (event: MessageEvent<WorkerInput>) => {
  const input = event.data;
  if (input.type === 'initialize') {
    field?.destroy();
    field = createAsciiField(input.canvas, input.options);
    if (!field) self.postMessage({ type: 'unavailable' });
  } else {
    field?.handle(input);
  }
};
