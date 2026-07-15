import { z } from "zod";

export const volumeMetadataSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  creatorId: z.string(),
});
export type VolumeMetadata = z.infer<typeof volumeMetadataSchema>;
