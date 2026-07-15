---
name: release-check
description: Use before considering a batch of work ready to ship, to confirm nothing violates repo-wide quality gates.
---

# Release Check

Run through `docs/agents/QUALITY_GATES.md` for every feature in the release batch:

1. `pnpm turbo build` and `pnpm turbo typecheck` succeed across the workspace.
2. `pnpm turbo test` passes, including contract tests for any changed shared package.
3. `pnpm turbo lint` is clean.
4. No package/app crosses an ownership boundary it shouldn't (`docs/agents/OWNERSHIP.md`).
5. Every changed shared contract has a corresponding `docs/specifications/` update.
6. Every architecturally significant decision in the batch has an ADR.
7. Nothing in the batch implements functionality explicitly deferred by the current `docs/roadmap/PHASE_*.md`.
8. Security-sensitive changes (auth, uploads, user content, moderation) were reviewed by `security-reviewer`.

Report a clear go/no-go with the specific gate that fails, if any.
