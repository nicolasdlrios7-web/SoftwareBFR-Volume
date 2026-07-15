/**
 * Identifies which adapter produced an IntentEvent, for diagnostics and
 * analytics only — the Runtime must not branch on this value.
 */
export type InputSource =
  | "pointer"
  | "touch"
  | "gamepad"
  | "xr"
  | "gaze"
  | "gesture"
  | "neural"
  | "multimodal-fusion";
