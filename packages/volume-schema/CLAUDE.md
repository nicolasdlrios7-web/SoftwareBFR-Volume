# @volume/volume-schema

This package is the canonical definition of what a Volume is. It is owned by the `contracts-engineer` agent (see `docs/agents/OWNERSHIP.md`).

Rules specific to this package:

- No other package or app may redefine `VolumeManifest`, `SceneNode`, `Interaction`, `Trigger`, `Capability`, `Environment`, or `Metadata`. Import them from here.
- Depends only on `zod`. No React, no database client, no HTTP framework.
- Every field addition or type change here is a contract change — treat it with the same care as an API version bump. See `docs/specifications/VOLUME_MANIFEST.md` and `docs/adr/0004-versioned-volume-manifest.md`.
- Schemas must stay parseable/serializable as plain JSON — a Volume Manifest is portable data, not a runtime object graph.
