import { z } from "zod";
import { triggerSchema } from "./trigger";
import { runtimeActionSchema } from "./runtime-action";

export const interactionSchema = z.object({
  id: z.string(),
  trigger: triggerSchema,
  actions: z.array(runtimeActionSchema),
});
export type Interaction = z.infer<typeof interactionSchema>;
