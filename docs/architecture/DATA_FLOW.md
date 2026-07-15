# Data Flow

## Authoring → publishing

```
Creator → Volume Studio → draft Volume (mutable) → preview
        → publish → immutable VolumeVersion → Publication → public URL
```

## Consumption

```
User opens public URL
  → Volume Platform resolves Publication → VolumeVersion → Volume Manifest
  → Volume Runtime loads Manifest
  → Renderer builds scene
  → Input Adapter emits IntentEvents as user interacts
  → Runtime dispatches, updates state, emits RuntimeEvents
  → Renderer reflects updated state
```

## Intent flow (device-independent)

```
Physical/biological input → Input Adapter → IntentEvent (VolumeAction) → Volume Runtime → RuntimeEvent → Renderer
```

The Runtime never receives a mouse event, touch event, or neural signal directly — only the abstracted `IntentEvent`. See `docs/adr/0002-input-abstraction.md`.

## Status

Phase 0: this describes the target flow. No implementation exists yet beyond the type contracts in `packages/volume-schema`, `packages/input-core`, and the interfaces in `packages/volume-runtime`.
