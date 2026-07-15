import { z } from "zod";

/**
 * Placeholder for the executable action vocabulary interactions can trigger
 * (e.g. PLAY_AUDIO, UPDATE_TRANSFORM). Full set is defined alongside the
 * Runtime's Action Executor in Phase 1 — see docs/specifications/RUNTIME_EVENTS.md.
 */
export const runtimeActionSchema = z.object({
  type: z.string(),
  target: z.string().optional(),
  params: z.record(z.unknown()).optional(),
});
export type RuntimeAction = z.infer<typeof runtimeActionSchema>;
