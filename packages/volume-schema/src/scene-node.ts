import { z } from "zod";
import { transformSchema } from "./transform";

export const sceneNodeTypeSchema = z.enum(["model", "text", "image", "video", "audio", "group"]);
export type SceneNodeType = z.infer<typeof sceneNodeTypeSchema>;

export const sceneNodeSchema = z.object({
  id: z.string(),
  type: sceneNodeTypeSchema,
  assetId: z.string().optional(),
  content: z.string().optional(),
  transform: transformSchema,
  children: z.array(z.string()).default([]),
});
export type SceneNode = z.infer<typeof sceneNodeSchema>;
