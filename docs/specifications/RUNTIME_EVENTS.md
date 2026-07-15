# Runtime Events Specification

Canonical implementation: `packages/volume-runtime`.

## Current shape (Phase 0 — interfaces only)

```ts
interface RuntimeEvent<TPayload = unknown> {
  type: string;
  payload: TPayload;
  timestamp: number;
}

interface EventBus {
  emit(event: RuntimeEvent): void;
  subscribe(type: string, handler: (event: RuntimeEvent) => void): () => void;
}
```

## Planned event catalogue (Phase 1+)

To be defined alongside the Manifest Parser and Interaction Engine: `node-selected`, `node-created`, `transform-updated`, `audio-played`, `manifest-loaded`, `interaction-triggered`, and their payload shapes. This document is updated as each is implemented — do not add speculative event types to `volume-runtime` ahead of the feature that needs them.

## Action executor (planned)

`RuntimeAction` (`packages/volume-schema`) is the executable vocabulary an `Interaction` can trigger (e.g. `PLAY_AUDIO`, `UPDATE_TRANSFORM`, `CREATE_NODE`, `REMOVE_NODE`). The Action Executor that interprets these against the Scene Graph is implemented in Phase 1.
