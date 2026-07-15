# ADR 0002: Input Abstraction

## Context

Volume must work with today's mouse/touch/keyboard input and, later, XR controllers and Multi Modal Dawn's gaze/gesture/neural input — without rewriting the Runtime or every Volume's interactions for each new input modality.

## Decision

All input is translated by a device-specific adapter (`packages/input-web`, future `input-xr`, `input-dawn`) implementing `InputProvider` (`packages/input-core`) into abstract `IntentEvent`s carrying a `VolumeAction`. The Volume Runtime and Volume Manifest only ever see `VolumeAction`s — never raw device events.

## Consequences

- Adding a new input modality never requires changing `volume-runtime` or existing Volume Manifests.
- The Runtime cannot special-case a device even under pressure to ship a feature quickly — this is enforced by package boundaries (`packages/volume-runtime/CLAUDE.md`) and reviewed by `spatial-runtime-engineer` / `contracts-engineer`.
- Fusion of multiple simultaneous signals (e.g. gaze + gesture + neural) is an adapter-layer concern (`multimodal-fusion` input source), not a Runtime concern.
