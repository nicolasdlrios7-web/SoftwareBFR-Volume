# Input Actions Specification

Canonical implementation: `packages/input-core`.

## VolumeAction

```ts
type VolumeAction =
  | "SELECT" | "MOVE" | "ROTATE" | "SCALE"
  | "GRAB" | "RELEASE" | "FOCUS" | "ACTIVATE"
  | "NAVIGATE" | "CREATE";
```

## IntentEvent

```ts
interface IntentEvent {
  action: VolumeAction;
  targetId?: string;
  confidence?: number;
  source: InputSource; // "pointer" | "touch" | "gamepad" | "xr" | "gaze" | "gesture" | "neural" | "multimodal-fusion"
  timestamp: number;
}
```

## Adapters

| Adapter | Package | Status |
|---|---|---|
| Pointer / keyboard / touch | `packages/input-web` | stub, Phase 1 |
| Gamepad | future `input-gamepad` | not started |
| XR | future `input-xr` | not started |
| Gaze / Gesture / Neural (Dawn) | future `input-dawn` | not started, see `docs/architecture/FUTURE_DAWN_INTEGRATION.md` |

Every adapter implements `InputProvider` (`packages/input-core`). The Volume Runtime consumes only `IntentEvent`s produced by adapters — never raw device events.
