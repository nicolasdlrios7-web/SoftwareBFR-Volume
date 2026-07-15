# apps/worker

Owned by `backend-engineer`. Empty shell in Phase 0.

Background job consumer (asset processing, publishing pipeline, moderation). Shares `@volume/domain` and `@volume/database` with `apps/api` but must not import `apps/api` directly — communicate through the queue and shared packages only.
