import { z } from "zod";

export const assetTypeSchema = z.enum(["model", "image", "video", "audio", "text"]);
export type AssetType = z.infer<typeof assetTypeSchema>;

export const assetReferenceSchema = z.object({
  id: z.string(),
  type: assetTypeSchema,
  uri: z.string(),
});
export type AssetReference = z.infer<typeof assetReferenceSchema>;
