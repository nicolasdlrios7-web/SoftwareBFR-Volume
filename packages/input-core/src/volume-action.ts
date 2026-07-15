/**
 * The abstract actions the Volume Runtime understands, regardless of the
 * physical or biological input that produced them. See
 * docs/specifications/INPUT_ACTIONS.md and docs/adr/0002-input-abstraction.md.
 */
export type VolumeAction =
  | "SELECT"
  | "MOVE"
  | "ROTATE"
  | "SCALE"
  | "GRAB"
  | "RELEASE"
  | "FOCUS"
  | "ACTIVATE"
  | "NAVIGATE"
  | "CREATE";
