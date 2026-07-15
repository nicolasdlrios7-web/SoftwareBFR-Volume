/**
 * Events the Runtime emits after processing an IntentEvent against the
 * current Volume Manifest (e.g. "node-selected", "audio-played"). The
 * concrete event catalogue is defined in docs/specifications/RUNTIME_EVENTS.md
 * as it's implemented — this is the shape, not the full vocabulary yet.
 */
export interface RuntimeEvent<TPayload = unknown> {
  type: string;
  payload: TPayload;
  timestamp: number;
}
