import type { VolumeManifest } from "@volume/volume-schema";
import type { IntentEvent } from "@volume/input-core";

/**
 * The Runtime's public surface. Concrete implementation (Manifest Parser,
 * Scene Graph, Interaction Engine, Asset Loader, Capability Resolver) lands
 * in Phase 1.
 */
export interface VolumeRuntime {
  load(manifest: VolumeManifest): Promise<void>;
  dispatch(intent: IntentEvent): void;
  dispose(): void;
}
