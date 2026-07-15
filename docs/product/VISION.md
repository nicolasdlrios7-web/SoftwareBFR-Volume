# Vision

Volume is a platform for creating, publishing, discovering, and sharing interactive spatial experiences.

A Volume is not a normal post, video, game, or 3D scene. It is a portable interactive experience containing a spatial scene, media, objects, audio, interactions, behaviors, metadata, permissions, optional multiplayer state, and input mappings.

## The critical architectural idea

**A Volume is data. The client interprets and renders it.**

We do not hard-code each experience into the app. Instead:

```
Creator → Volume Studio → Volume Manifest → Volume Runtime → { Web, Mobile, Multi Modal Dawn }
```

The experience stays the same. The input adapter changes.

This is strategically important: Volume becomes a product today, while naturally becoming a native application of the Consciousness Computer Interface later. See `docs/architecture/FUTURE_DAWN_INTEGRATION.md`.

## Intent → action → runtime

```
INTENT → INPUT ADAPTER → STANDARD ACTION → VOLUME RUNTIME → EXPERIENCE RESPONSE
```

Mouse click, screen tap, and gaze+gesture+neural attention all resolve to the same abstract action (e.g. `SELECT_OBJECT`) before reaching the Runtime. The Volume itself never knows where the intent came from. See `docs/adr/0002-input-abstraction.md`.

## Six systems

- **Volume Social** — consumer-facing social platform (profiles, follow, discover, react, comment, save, share)
- **Volume Studio** — creation environment
- **Volume Runtime** — the engine: parses manifests, manages state, executes interactions (standalone, no product/infra knowledge)
- **Volume Platform** — the cloud platform: users, publishing, social graph, moderation, search, analytics
- **Input Framework** — converts hardware/biological input into universal `VolumeAction`s
- **Realtime Presence** — architecturally anticipated, not built until Phase 6

## What Volume is not (yet)

See `docs/product/MVP.md` for explicit Phase 0/1 scope and what's deliberately deferred.
