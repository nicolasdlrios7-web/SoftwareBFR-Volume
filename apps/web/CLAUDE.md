# apps/web

Owned by `frontend-engineer`, reviewed by `integration-reviewer`. Placeholder shell in Phase 0 — real Studio/Social features start Phase 2/4.

Rules:
- The web app is a consumer of shared contracts. Never redefine `VolumeManifest`, `RuntimeEvent`, or `VolumeAction` — import them from `@volume/volume-schema`, `@volume/volume-runtime`, `@volume/input-core`.
- Business rules belong in application/domain layers on the backend, not in React components. Components call `apps/api` through `@volume/api-contracts`-typed requests.
- Feature code lives under `features/`, organized by domain (studio, social, discovery), once it exists — not by page route.
