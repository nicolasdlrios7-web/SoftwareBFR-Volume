import type { VolumeAction } from "./volume-action";
import type { InputSource } from "./input-source";

export interface IntentEvent {
  action: VolumeAction;
  targetId?: string;
  confidence?: number;
  source: InputSource;
  timestamp: number;
}
