import { describe, expect, it } from "vitest";
import { volumeManifestSchema } from "../volume-manifest";

describe("volumeManifestSchema", () => {
  it("parses a minimal manifest", () => {
    const manifest = volumeManifestSchema.parse({
      specVersion: "0.1",
      id: "vol_123",
      metadata: {
        title: "Dream Forest",
        description: "An interactive forest at night",
        creatorId: "usr_123",
      },
      scene: {
        nodes: [
          {
            id: "tree_01",
            type: "model",
            assetId: "asset_tree",
            transform: {
              position: [0, 0, -5],
              rotation: [0, 0, 0],
              scale: [1, 1, 1],
            },
          },
        ],
      },
      interactions: [
        {
          id: "interaction_01",
          trigger: { type: "ACTIVATE", target: "tree_01" },
          actions: [{ type: "PLAY_AUDIO", target: "forest_whisper" }],
        },
      ],
      entryPoint: "node_root",
    });

    expect(manifest.metadata.title).toBe("Dream Forest");
    expect(manifest.scene.nodes).toHaveLength(1);
    expect(manifest.interactions[0]?.trigger.type).toBe("ACTIVATE");
  });

  it("rejects a manifest missing required fields", () => {
    expect(() =>
      volumeManifestSchema.parse({ id: "vol_123" })
    ).toThrow();
  });
});
