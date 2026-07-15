import { z } from "zod";

export const environmentSchema = z.object({
  background: z.record(z.unknown()).default({}),
  lighting: z.record(z.unknown()).default({}),
  audio: z.record(z.unknown()).default({}),
});
export type Environment = z.infer<typeof environmentSchema>;
