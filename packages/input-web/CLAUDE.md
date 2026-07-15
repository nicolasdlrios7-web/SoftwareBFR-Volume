# @volume/input-web

Owned by `spatial-runtime-engineer`. Empty stub in Phase 0.

Implements `InputProvider` from `@volume/input-core` for pointer, keyboard, and touch. Only produces `IntentEvent`s — never calls into `@volume/volume-runtime` directly (the app wires provider output to the Runtime's `dispatch`).
