import type { RuntimeEvent } from "./runtime-event";

export type RuntimeEventHandler = (event: RuntimeEvent) => void;
export type Unsubscribe = () => void;

export interface EventBus {
  emit(event: RuntimeEvent): void;
  subscribe(type: string, handler: RuntimeEventHandler): Unsubscribe;
}
