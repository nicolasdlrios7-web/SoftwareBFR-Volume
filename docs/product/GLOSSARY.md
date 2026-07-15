# Glossary

- **Volume** — a portable, interactive spatial experience described by a Volume Manifest.
- **Volume Manifest** — the canonical JSON/data representation of a Volume (`packages/volume-schema`).
- **Volume Runtime** — the framework-independent engine that loads a manifest, manages scene state, and executes interactions.
- **Volume Studio** — the creation environment where creators build Volumes.
- **Volume Social** — the consumer-facing discovery/social surface.
- **VolumeAction** — an abstract intent (e.g. `SELECT`, `ACTIVATE`, `GRAB`) that all input adapters normalize to.
- **IntentEvent** — a concrete occurrence of a `VolumeAction`, carrying source, target, confidence, and timestamp.
- **InputProvider / Input Adapter** — device-specific code (web, XR, Dawn) that turns raw input into `IntentEvent`s.
- **SceneNode** — a single element (model, text, image, etc.) in a Volume's scene graph.
- **Interaction** — a Trigger plus one or more RuntimeActions to execute when that trigger fires.
- **VolumeVersion** — an immutable, published snapshot of a Volume's manifest.
- **Publication** — the record that makes a VolumeVersion publicly accessible.
- **Multi Modal Dawn** — Black Flow Reality's future hardware surface (gaze, gesture, neural input).
- **Consciousness Computer Interface (CCI)** — the broader Black Flow Reality thesis Volume is a first product of.
