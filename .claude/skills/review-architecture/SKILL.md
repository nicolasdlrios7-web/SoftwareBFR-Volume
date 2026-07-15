---
name: review-architecture
description: Use to review a proposed or existing change against Volume's architectural principles and layering rules before or after implementation.
---

# Review Architecture

Check the change against:

1. **Volume-is-data** (`docs/adr/0001-volume-is-data.md`) — does this hard-code an experience that should be manifest-driven?
2. **Input abstraction** (`docs/adr/0002-input-abstraction.md`) — does any device-specific code leak into `packages/volume-runtime` or `packages/volume-schema`?
3. **Runtime/renderer separation** (`docs/adr/0006-runtime-renderer-separation.md`) — does the renderer contain business logic, or does the runtime import a rendering library?
4. **Schema-first contracts** (`docs/adr/0005-schema-first-contracts.md`) — is a shared shape being redefined locally instead of imported from its canonical package?
5. **Ownership** (`docs/agents/OWNERSHIP.md`) — does the change stay within its owning package/app, or does it reach into another agent's territory without a contract handoff?
6. **Phase scope** (`docs/roadmap/`) — does the change implement something explicitly deferred to a later phase?

Report violations with the specific file/line and which principle it breaks. If none, say so explicitly — don't manufacture findings.
