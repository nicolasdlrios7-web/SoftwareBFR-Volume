---
name: implement-feature
description: Use when starting implementation of a Volume feature ticket, to follow the required pipeline instead of jumping straight to code.
---

# Implement Feature

1. Read the ticket / task brief in full (objective, owned files, do-not-modify, input contract, acceptance criteria, out-of-scope).
2. Read relevant docs: `docs/architecture/`, `docs/specifications/`, and any package `CLAUDE.md` under the owned files.
3. Identify existing contracts (`packages/volume-schema`, `packages/api-contracts`, `packages/input-core`) the feature depends on — do not redefine them locally.
4. Identify dependencies on other packages/apps and whether any is a contract change (if so, that lands via `contracts-engineer` first, per `docs/agents/WORKFLOW.md`).
5. Produce a short implementation plan before editing.
6. Implement, staying inside the owned files listed in the task brief.
7. Write/update tests (unit, and contract tests if a shared schema changed).
8. Review your own diff for scope creep and boundary violations against `docs/agents/OWNERSHIP.md`.
9. Verify acceptance criteria against actual running behavior — see the `verify-feature` skill.
10. Report what changed, against the original acceptance criteria.
