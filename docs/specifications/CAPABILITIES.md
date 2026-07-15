# Capabilities Specification

Canonical implementation: `packages/volume-schema` (`Capability`, currently `z.string()`).

## Purpose

A Volume Manifest's `capabilities` array declares what an input/render surface must support to fully experience it (e.g. `"pointer"`, `"xr-hands"`, `"gaze"`, `"spatial-audio"`). Clients use this to decide whether to render the full experience or offer a reduced-capability fallback.

## Status

Phase 0: the schema is an open string to avoid prematurely fixing the vocabulary. The Capability Resolver (matches a client's declared `InputProvider.getCapabilities()` against a Manifest's required capabilities) is implemented alongside the Runtime in Phase 1 — the enumerated capability vocabulary is defined at that point, not now.
