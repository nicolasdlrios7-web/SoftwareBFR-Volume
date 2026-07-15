# @volume/database

Owned by `database-engineer`, reviewed by `backend-engineer`. Connection setup only in Phase 0 — no schema or migrations yet.

Rules:
- Never edit a previously applied migration — write a new one.
- Schema lives here; queries composed from it live in `apps/api/src/modules/*/infrastructure`.
- No other package or app opens its own database connection.
