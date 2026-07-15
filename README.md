# Volume

Volume is a platform for creating, publishing, discovering, and sharing interactive spatial experiences, built by Black Flow Reality.

This repository is in **Phase 0 — Foundation**. See [docs/roadmap/PHASE_0_FOUNDATION.md](docs/roadmap/PHASE_0_FOUNDATION.md) for scope and [docs/product/VISION.md](docs/product/VISION.md) for the product concept.

## Structure

- `apps/` — deployable applications (web, api, worker, admin)
- `packages/` — shared libraries, engine code, and contracts
- `docs/` — product, architecture, specification, and ADR documentation
- `.claude/` — Claude Code agent and skill definitions for this repo

## Getting started

```bash
pnpm install
pnpm dev
```

See root [CLAUDE.md](CLAUDE.md) for the architectural rules every change in this repo must follow.
