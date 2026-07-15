# Feature Workflow

Every substantial feature follows this pipeline:

```
FEATURE REQUEST
  → 1. Product definition
  → 2. Acceptance criteria
  → 3. Architecture impact check
        → contract change? → contracts-engineer changes it first
        → no contract change? → proceed
  → 4. Task breakdown (frontend / backend / runtime, in parallel where files don't overlap)
  → 5. Integration
  → 6. Testing
  → 7. Security review (when relevant — auth, uploads, user content, moderation)
  → 8. Acceptance check
  → MERGE
```

## Rules

- Parallel agents must own different files or directories — see `docs/agents/OWNERSHIP.md`.
- Shared contract changes land before dependent parallel implementation whenever possible.
- Use isolated worktrees for parallel write-heavy agent work — never have multiple agents editing `main` simultaneously.
- Task briefs to agents specify: objective, owned files, do-not-modify list, input contract, acceptance criteria, required tests, and out-of-scope items (see example task format in `docs/product/` planning notes / original spec).

## Task granularity example

```
OBJECTIVE: Allow a creator to add a text node to a draft Volume.
OWNED FILES: apps/web/features/studio/**, packages/volume-renderer-web/**
DO NOT MODIFY: packages/volume-schema/**, apps/api/**
INPUT CONTRACT: SceneNode (type: "text") from @volume/volume-schema
ACCEPTANCE CRITERIA: click Add Text → node created → appears in hierarchy →
  renders in preview → content editable → persists after refresh.
OUT OF SCOPE: rich text, animations, collaborative editing.
```
