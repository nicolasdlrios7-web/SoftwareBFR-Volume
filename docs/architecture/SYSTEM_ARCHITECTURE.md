# System Architecture

```
                    USER SURFACES
       Web        Mobile        Flow OS        Multi Modal Dawn
                         │
                         ▼
                 INPUT ABSTRACTION
  Pointer │ Touch │ Controller │ XR │ Gaze │ Gesture │ Neural
                         │
                         ▼
                  VOLUME RUNTIME
   Scene Graph, Interaction Engine, State Machine,
   Event System, Asset Loader, Capability System
                    │           │
                    ▼           ▼
             RENDERERS      PLATFORM APIs
         Web 3D / Mobile /   Identity, Publishing,
         XR / Dawn           Social, Discovery,
                              Assets, Analytics,
                              Moderation
                                   │
                                   ▼
                            INFRASTRUCTURE
                    PostgreSQL, Object Storage, Cache,
                    Queues, Search, Observability
```

## Layering rules

- **Input Abstraction** (`packages/input-core`, `packages/input-web`, future `input-xr`/`input-dawn`) never leaks device details past itself. It emits `IntentEvent`s only.
- **Volume Runtime** (`packages/volume-runtime`) knows nothing about Instagram-style feeds, auth providers, databases, Claude, or Multi Modal Dawn hardware specifics. It is as close as possible to a standalone engine.
- **Renderers** (`packages/volume-renderer-web`, future per-platform renderers) own presentation only — no business logic.
- **Platform APIs** (`apps/api` modules) own users, volumes, versions, assets, publishing, social graph, moderation, search, analytics.
- **Infrastructure** is only touched through `packages/database`, `packages/storage`, `packages/realtime` — no app or package opens its own connection.

## Repository mapping

See `docs/agents/OWNERSHIP.md` for the directory-to-owner table, and the root `CLAUDE.md` for the architectural principles every change must follow.
