# @volume/input-core

The universal vocabulary of intent. Owned by `contracts-engineer`, reviewed by `spatial-runtime-engineer`.

Rules specific to this package:

- `VolumeAction` and `IntentEvent` are the only things a concrete input adapter (mouse, touch, XR, future Dawn) is allowed to hand to the Volume Runtime.
- This package must never import a device SDK, DOM types, or a rendering library. It defines shapes, not behavior.
- Adapters (`packages/input-web`, future `input-xr`, `input-dawn`) depend on this package — never the other way around.
