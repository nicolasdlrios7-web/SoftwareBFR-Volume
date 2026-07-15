# ADR 0005: Schema-First Shared Contracts

## Context

Multiple apps and packages (web, api, runtime, renderer) consume the same core shapes (Volume Manifest, API DTOs, input actions). Letting each consumer define its own version invites drift and silent incompatibility.

## Decision

Shared contracts are defined once, schema-first, in dedicated packages (`packages/volume-schema`, `packages/api-contracts`, `packages/input-core`), owned by the `contracts-engineer` agent. Consumers import types/schemas rather than redeclaring them. Zod is used so runtime validation and static types come from the same source.

## Consequences

- A contract change is a deliberate, reviewed act in one place, not an incidental side effect of an unrelated feature.
- Consuming packages/apps cannot introduce a new Volume concept locally — they request a contracts change instead.
- Adds a coordination step (contracts change must land before dependents can use it) — accepted as the cost of avoiding drift, per the user's explicit workflow in `docs/agents/WORKFLOW.md`.
