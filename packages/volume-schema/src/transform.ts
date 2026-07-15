import { z } from "zod";

export const vector3Schema = z.tuple([z.number(), z.number(), z.number()]);
export type Vector3 = z.infer<typeof vector3Schema>;

export const transformSchema = z.object({
  position: vector3Schema,
  rotation: vector3Schema,
  scale: vector3Schema,
});
export type Transform = z.infer<typeof transformSchema>;
