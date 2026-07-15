# ADR 0004: Versioned, Immutable Published Volumes

## Context

If a published Volume simply pointed at a continuously mutated JSON document, viewers could see inconsistent state mid-edit, there would be no rollback, and caching would be unsafe.

## Decision

A `Volume` has a mutable `Draft` and a series of immutable `VolumeVersion`s. Publishing creates a new `VolumeVersion` snapshot; a `Publication` record makes a specific version publicly reachable. See `docs/architecture/DOMAIN_MODEL.md`.

## Consequences

- Rollback, reproducibility, and moderation act on specific immutable versions.
- Clients can cache a `VolumeVersion` aggressively since it never changes.
- Requires a `specVersion` field on the Manifest schema itself for forward compatibility as the schema evolves — see `docs/specifications/VOLUME_MANIFEST.md`.
