import { z } from "zod";

/**
 * Declares what an input surface must support to fully experience a Volume
 * (e.g. "pointer", "xr-hands", "gaze"). Used by clients to decide whether to
 * offer a reduced-capability fallback. See docs/specifications/CAPABILITIES.md.
 */
export const capabilitySchema = z.string();
export type Capability = z.infer<typeof capabilitySchema>;
