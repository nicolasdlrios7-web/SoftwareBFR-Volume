# Future: Multi Modal Dawn Integration

Multi Modal Dawn (gaze, gesture, neural attention) is Black Flow Reality's future hardware surface. Volume's architecture anticipates it without depending on it.

## How it plugs in

```
DawnInputAdapter
   ├── Gaze Adapter
   ├── Gesture Adapter
   └── Neural Signal Adapter
            │
            ▼
     Multimodal Fusion
            │
            ▼
      Volume Action (same vocabulary as mouse/touch)
```

A future `packages/input-dawn` package implements the same `InputProvider` interface (`packages/input-core`) that `packages/input-web` implements today. The Volume Runtime, Volume Manifest, and every existing Volume require zero changes to support Dawn — this is the point of the input abstraction (`docs/adr/0002-input-abstraction.md`).

## What this means today

- Never add gaze/gesture/neural-specific branches inside `packages/volume-runtime` or `packages/volume-schema`.
- New `InputSource` values can be added to `packages/input-core` as adapters are built, without touching the Runtime.
- Dawn hardware specifics, SDKs, and biometric handling are entirely out of scope until Phase 7 (`docs/roadmap/`).
