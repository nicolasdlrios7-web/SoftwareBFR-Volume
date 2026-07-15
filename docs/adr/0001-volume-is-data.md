# ADR 0001: A Volume Is Portable Data

## Context

Interactive spatial experiences could be implemented as hard-coded app features (one screen/component per experience) or as data interpreted by a generic runtime. Hard-coding does not scale past a handful of experiences and ties every experience to one client implementation.

## Decision

A Volume is represented as a portable, versioned Volume Manifest (`packages/volume-schema`). Clients never hard-code an experience; the Volume Runtime interprets the Manifest and the renderer draws it.

## Consequences

- New experiences require no app deployment — only a new/updated Manifest.
- The same Manifest can be rendered on web, mobile, and future XR/Dawn clients without duplicating experience logic.
- The Manifest schema becomes a high-stakes shared contract, owned by `contracts-engineer` — see `docs/adr/0005-schema-first-contracts.md`.
