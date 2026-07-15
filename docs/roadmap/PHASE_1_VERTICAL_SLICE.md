# Phase 1 — Vertical Slice 001

## Goal

A creator can create a minimal Volume, add basic spatial content, preview it, publish an immutable version, receive a public URL, and another user can open and interact with it.

## Build order

1. Volume Manifest (already scaffolded in Phase 0 — extend as needed)
2. Runtime parser (`packages/volume-runtime`: Manifest Parser, Scene Graph)
3. Minimal renderer (`packages/volume-renderer-web`)
4. Volume persistence (`packages/database` schema + migrations)
5. Volume API (`apps/api/src/modules/volumes`, `volume-versions`, `publishing`)
6. Minimal Studio (`apps/web` — create/edit/preview a draft)
7. Publish system
8. Public Viewer (`apps/web` — open a published Volume by URL)
9. Minimal social interaction (like/save/comment)

## Minimal Volume support

Text, image, one 3D asset, position/rotation/scale, one simple interaction (activate → visual/audio change).

## Out of scope

Rich text, animations beyond the one interaction, collaborative editing, AI generation, multiplayer.
