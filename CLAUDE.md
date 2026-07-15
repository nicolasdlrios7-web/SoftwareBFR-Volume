# Volume

## Product

Volume is a platform for creating, publishing, discovering, and sharing interactive spatial experiences. See `docs/product/VISION.md`.

## Architectural principles

1. A Volume is portable data described by the Volume Manifest (`packages/volume-schema`). The client interprets and renders it — experiences are never hard-coded into an app.
2. Runtime (`packages/volume-runtime`) and renderer (`packages/volume-renderer-web`, future platform renderers) must remain separate.
3. Hardware input must be converted into abstract Volume Actions (`packages/input-core`) before reaching the Runtime. The Runtime never depends on mouse, touch, or device-specific events.
4. Multi Modal Dawn (gaze, gesture, neural) integration must happen through input adapters, not by changing the Runtime or Volume Manifest.
5. Published Volumes are immutable versions. A Volume's draft is mutable; a `VolumeVersion` behind a `Publication` is not.
6. Shared contracts (`packages/volume-schema`, `packages/api-contracts`, `packages/input-core`) are schema-first — define the type/schema before implementing consumers.
7. Domain boundaries must be respected. See `docs/agents/OWNERSHIP.md` for which package/app owns which concern.

## Workflow

Before implementing:
1. Read relevant specifications in `docs/specifications/` and `docs/architecture/`.
2. Identify affected packages and whether a shared contract needs to change.
3. If a contract changes, that change happens in the owning package first (see `docs/agents/OWNERSHIP.md`), before dependents are updated.
4. Write acceptance criteria before writing code.

After implementing:
1. Run tests, type checking, and linting for affected packages.
2. Verify acceptance criteria against actual behavior, not just passing checks.
3. Update documentation if architecture or contracts changed.

## Prohibited

- Do not use `any`.
- Do not duplicate shared schemas — import from their canonical package.
- Do not access databases directly from UI code.
- Do not put application business logic in API route handlers; put it in `application/` layers.
- Do not edit previous database migrations — write a new one.
- Do not create Dawn-specific or device-specific logic inside `volume-runtime`; it belongs in an input adapter.
- Do not implement product features beyond what the current phase's roadmap doc (`docs/roadmap/`) scopes.

## More detail

- `docs/architecture/SYSTEM_ARCHITECTURE.md` — full system diagram and layering
- `docs/agents/OWNERSHIP.md` — directory ownership map
- `docs/agents/WORKFLOW.md` — full feature pipeline
- `docs/agents/QUALITY_GATES.md` — definition of done
