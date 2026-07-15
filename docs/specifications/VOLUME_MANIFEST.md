# Volume Manifest Specification (VXP 0.1)

Canonical implementation: `packages/volume-schema`.

## Shape

```json
{
  "specVersion": "0.1",
  "id": "vol_123",
  "metadata": {
    "title": "Dream Forest",
    "description": "An interactive forest at night",
    "creatorId": "usr_123"
  },
  "environment": { "background": {}, "lighting": {}, "audio": {} },
  "scene": { "nodes": [] },
  "interactions": [],
  "capabilities": [],
  "entryPoint": "node_root"
}
```

## SceneNode

```json
{
  "id": "tree_01",
  "type": "model",
  "assetId": "asset_tree",
  "transform": { "position": [0, 0, -5], "rotation": [0, 0, 0], "scale": [1, 1, 1] }
}
```

## Interaction

```json
{
  "id": "interaction_01",
  "trigger": { "type": "ACTIVATE", "target": "tree_01" },
  "actions": [{ "type": "PLAY_AUDIO", "target": "forest_whisper" }]
}
```

A `Trigger` never names a device (click/tap/pinch/gaze-dwell) — only an abstract `VolumeAction` (`ACTIVATE`, `SELECT`, ...). See `docs/specifications/INPUT_ACTIONS.md`.

## Versioning

Any change to the schemas in `packages/volume-schema` is a contract change to this spec. Backwards-incompatible changes require a `specVersion` bump and an ADR. See `docs/adr/0004-versioned-volume-manifest.md`.
