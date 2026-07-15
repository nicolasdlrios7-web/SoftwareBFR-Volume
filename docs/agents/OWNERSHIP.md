# Directory Ownership

| Area | Primary owner | Reviewers |
|---|---|---|
| `docs/product/`, `docs/roadmap/` | product-architect | platform-architect |
| `docs/architecture/`, `docs/adr/` | platform-architect | contracts-engineer |
| `packages/volume-schema` | contracts-engineer | platform-architect |
| `packages/input-core` | contracts-engineer | spatial-runtime-engineer |
| `packages/api-contracts` | contracts-engineer | backend-engineer |
| `docs/specifications/` | contracts-engineer | platform-architect |
| `packages/volume-runtime` | spatial-runtime-engineer | contracts-engineer |
| `packages/volume-renderer-web` | spatial-runtime-engineer | integration-reviewer |
| `packages/input-web` | spatial-runtime-engineer | contracts-engineer |
| `packages/realtime` | spatial-runtime-engineer | backend-engineer |
| `apps/web`, `packages/ui` | frontend-engineer | integration-reviewer |
| `apps/api`, `apps/worker` | backend-engineer | security-reviewer |
| `packages/domain`, `packages/auth`, `packages/storage`, `packages/analytics`, `packages/observability` | backend-engineer | security-reviewer |
| `packages/database` | database-engineer | backend-engineer |
| `tests/`, `packages/testing` | test-engineer | integration-reviewer |
| `.claude/agents/`, `.claude/skills/`, root `CLAUDE.md` | platform-architect | product-architect |

## Rule

An agent should never casually modify another agent's owned subsystem. If work in one area reveals that an owned contract or file elsewhere is wrong, report it — the owning agent makes the change. See `docs/agents/WORKFLOW.md`.
