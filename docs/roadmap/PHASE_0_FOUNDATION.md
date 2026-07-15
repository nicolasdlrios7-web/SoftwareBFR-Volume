# Phase 0 — Foundation

## Goal

No visible product features. Make every future feature easier, safer, more consistent, and more parallelizable.

## Scope

- Repository structure (`apps/`, `packages/`, `docs/`, `.claude/`)
- Product documentation (`docs/product/`)
- Architecture documentation (`docs/architecture/`, `docs/adr/`)
- Volume Manifest, Input Actions, Runtime Events, Capabilities specs (`docs/specifications/`)
- Real contract packages: `packages/volume-schema`, `packages/input-core`
- Interface-only packages: `packages/volume-runtime`
- Stub packages/apps with ownership docs but no business logic
- `.claude/agents/`, `.claude/skills/`, root and nested `CLAUDE.md`
- `docs/agents/OWNERSHIP.md`, `WORKFLOW.md`, `QUALITY_GATES.md`

## Explicitly out of scope

- Database schema/migrations
- Real API endpoints beyond a health check
- Any UI beyond a placeholder page
- Studio, Social, or Runtime feature implementation

## Exit criteria

Claude Code (and any engineer) can determine, without asking: what Volume is, where code belongs, who owns it, how a feature is implemented end-to-end, and what cannot be changed casually.

## Next

`docs/roadmap/PHASE_1_VERTICAL_SLICE.md`
