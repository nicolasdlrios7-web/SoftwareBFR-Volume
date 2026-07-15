# ADR 0003: Monorepo

## Context

Volume spans multiple deployable apps (web, api, worker, admin) and many shared packages (schema, runtime, renderer, input, domain, infra wrappers) that must stay in lockstep, especially the shared contracts.

## Decision

Single pnpm workspace + Turborepo monorepo (`apps/*`, `packages/*`) rather than separate repositories per app/package.

## Consequences

- Contract changes (schema, input-core, api-contracts) are atomic with their consumers in a single commit/PR, avoiding cross-repo version drift.
- Turborepo caches and parallelizes build/test/typecheck across packages.
- Requires directory ownership discipline (`docs/agents/OWNERSHIP.md`) so agents/engineers don't casually cross package boundaries just because they can see the code.
