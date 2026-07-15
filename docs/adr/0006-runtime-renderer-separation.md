# ADR 0006: Runtime/Renderer Separation

## Context

Volume must eventually render on web, mobile, and XR/Dawn surfaces. If rendering logic is entangled with scene/interaction state management, every new platform requires reimplementing both.

## Decision

`packages/volume-runtime` owns scene graph, interaction engine, state machine, event system, asset loading, and capability resolution — with zero rendering code. `packages/volume-renderer-web` (and future per-platform renderers) consume `RuntimeEvent`s and translate them into platform-specific drawing calls, with zero business logic.

## Consequences

- A new platform renderer only needs to implement event-to-visual translation against the existing Runtime contract — no engine work required.
- The Runtime is unit-testable without a DOM, WebGL context, or any rendering dependency.
- Enforced by `packages/volume-runtime/CLAUDE.md` ("never import a rendering library") and reviewed by `contracts-engineer`.
