# Domain Model

## Core entities

`User`, `Profile`, `Volume`, `VolumeVersion`, `Asset`, `Publication`, `Reaction`, `Comment`, `Follow`, `Collection`, `CollectionItem`, `Report`, `RuntimeSession`, `AnalyticsEvent`.

## Key relationship

```
Volume
  ├── Draft (mutable)
  └── VolumeVersion 1, 2, 3, ... (immutable)
             │
             ▼
        Publication
```

A published Volume is never a pointer to a continuously mutated JSON document. Publishing creates an immutable `VolumeVersion`; a `Publication` record makes a specific version publicly reachable. This gives rollback, reproducibility, moderation, future collaboration, historical analytics, and safe client caching. See `docs/adr/0004-versioned-volume-manifest.md`.

## Status

Phase 0: this document defines the target model. No schema or migrations exist yet — those land in `packages/database` starting Phase 1/2, owned by `database-engineer`.
