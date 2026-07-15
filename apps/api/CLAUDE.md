# apps/api

Owned by `backend-engineer`, reviewed by `security-reviewer`. Health-check only in Phase 0 — real modules start Phase 1/2.

Rules:
- Each domain module under `src/modules/<name>/` follows: `domain/`, `application/`, `infrastructure/`, `transport/`, `tests/`. Route handlers in `transport/` call `application/` use cases — they do not contain business logic or query the database directly.
- Never introduce a new Volume concept without going through `@volume/volume-schema` first (owned by `contracts-engineer`).
- Do not access `@volume/database` from outside `infrastructure/`.
