# @volume/volume-renderer-web

Owned by `spatial-runtime-engineer`. Empty stub in Phase 0 — implemented starting Phase 1/2 alongside the first vertical slice.

Rules:
- Translates `RuntimeEvent`s from `@volume/volume-runtime` (e.g. `CREATE_NODE`, `UPDATE_TRANSFORM`, `PLAY_AUDIO`) into browser-specific rendering (WebGL/three.js). It must never contain business logic — that belongs in the Runtime.
- No other renderer package (`volume-renderer-mobile`, `volume-renderer-dawn`, future) should share code with this one except through `volume-runtime`'s public contracts.
