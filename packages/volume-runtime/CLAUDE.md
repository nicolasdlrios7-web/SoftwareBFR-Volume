# @volume/volume-runtime

This package is the engine. It is owned by `spatial-runtime-engineer`, contracts reviewed by `contracts-engineer`.

This package must remain framework-independent. Never import:
- Next.js, React, or any UI framework
- database packages
- authentication packages
- rendering libraries (those live in `volume-renderer-web` and future platform renderers)

The Runtime may depend on:
- `@volume/volume-schema`
- `@volume/input-core`
- generic domain primitives

All public runtime behavior requires tests once implemented.

The Runtime consumes `IntentEvent` / `VolumeAction` from `@volume/input-core`. It must never directly interpret mouse events, touch events, EEG signals, or headset-specific events — those are an adapter's job.

Phase 0 status: interfaces only (`RuntimeAction`, `RuntimeEvent`, `EventBus`, lifecycle). The Manifest Parser, Scene Graph, and Interaction Engine are implemented starting Phase 1 — see `docs/roadmap/PHASE_1_VERTICAL_SLICE.md`.
