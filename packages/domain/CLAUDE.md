# @volume/domain

Owned by `backend-engineer`, reviewed by `database-engineer`. Empty stub in Phase 0.

Holds cross-module domain primitives shared by `apps/api` modules (User, Volume, VolumeVersion, Asset, Publication, etc. — see `docs/architecture/DOMAIN_MODEL.md`). Entity definitions land alongside the modules that need them in `apps/api/src/modules/*/domain/`; this package is for primitives genuinely shared across modules, not a dumping ground for all entities.
