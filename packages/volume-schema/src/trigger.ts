import { z } from "zod";

/**
 * Trigger types mirror the abstract VolumeAction vocabulary defined in
 * @volume/input-core — a Trigger never references a concrete input device.
 */
export const triggerTypeSchema = z.enum([
  "SELECT",
  "ACTIVATE",
  "FOCUS",
  "GRAB",
  "RELEASE",
  "NAVIGATE",
]);
export type TriggerType = z.infer<typeof triggerTypeSchema>;

export const triggerSchema = z.object({
  type: triggerTypeSchema,
  target: z.string(),
});
export type Trigger = z.infer<typeof triggerSchema>;
