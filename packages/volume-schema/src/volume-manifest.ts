import { z } from "zod";
import { volumeMetadataSchema } from "./metadata";
import { environmentSchema } from "./environment";
import { sceneNodeSchema } from "./scene-node";
import { interactionSchema } from "./interaction";
import { capabilitySchema } from "./capability";

/**
 * The canonical, portable representation of a Volume. This is the contract
 * the Volume Runtime consumes — see docs/specifications/VOLUME_MANIFEST.md
 * and docs/adr/0001-volume-is-data.md.
 */
export const volumeManifestSchema = z.object({
  specVersion: z.string(),
  id: z.string(),
  metadata: volumeMetadataSchema,
  environment: environmentSchema.default({ background: {}, lighting: {}, audio: {} }),
  scene: z.object({
    nodes: z.array(sceneNodeSchema).default([]),
  }),
  interactions: z.array(interactionSchema).default([]),
  capabilities: z.array(capabilitySchema).default([]),
  entryPoint: z.string(),
});
export type VolumeManifest = z.infer<typeof volumeManifestSchema>;
