import type { IntentEvent } from "./intent-event";

export type InputCapability = string;
export type InputHandler = (event: IntentEvent) => void;
export type Unsubscribe = () => void;

/**
 * The contract every concrete adapter (web, XR, future Dawn) implements.
 * See docs/product spec section on "what we deliberately do NOT build" —
 * only WebInputProvider ships in Phase 0/1.
 */
export interface InputProvider {
  initialize(): Promise<void>;
  getCapabilities(): InputCapability[];
  subscribe(handler: InputHandler): Unsubscribe;
}
