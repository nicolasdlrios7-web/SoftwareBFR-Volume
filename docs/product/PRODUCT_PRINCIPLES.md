# Product Principles

1. **A Volume is portable data**, not a hard-coded experience. The Runtime interprets it; the client renders it.
2. **Input is abstracted before it reaches the Runtime.** Mouse, touch, controller, gaze, gesture, and neural signals all resolve to the same `VolumeAction` vocabulary.
3. **Published experiences are immutable.** A creator's draft is mutable; once published, a `VolumeVersion` behind a `Publication` never changes — enabling rollback, reproducibility, and safe caching.
4. **The system must remain useful before neural hardware exists.** Every Dawn-specific capability is additive, not load-bearing for the core product.
5. **We build interfaces for future capabilities, not the capabilities themselves.** E.g. `InputProvider` ships with a web implementation now; XR/Dawn implementations come later against the same interface.
6. **Prove the core loop before building breadth.** Create → Publish → Discover → Enter → Interact is the whole product until it works end-to-end.
7. **No agent, human or AI, redefines the product vision opportunistically while implementing a ticket.** Vision changes go through `docs/product/`, not through an unrelated feature branch.
