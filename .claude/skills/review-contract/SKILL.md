---
name: review-contract
description: Use when reviewing a proposed change to packages/volume-schema, packages/api-contracts, or packages/input-core.
---

# Review Contract

Ask, in order:

1. **Backwards compatibility** — does this break an existing consumer? If yes, does it come with a `specVersion` bump and an ADR?
2. **Ownership** — does this belong in a shared contract package at all, or is it consumer-specific state that shouldn't be shared?
3. **Naming** — is it domain-specific to Volume, or a generic/borrowed name that will collide with future concepts?
4. **Runtime dependence** — does the Runtime depend on implementation details of a specific consumer, or does the contract stay a pure shape?
5. **Device assumptions** — does it accidentally assume a particular input device or rendering platform? (Contracts must stay device/platform-neutral — see `docs/adr/0002-input-abstraction.md`.)
6. **Test coverage** — is there a schema-level smoke test validating a realistic example?

Report each answer explicitly; don't skip a question because it seems obviously fine.
