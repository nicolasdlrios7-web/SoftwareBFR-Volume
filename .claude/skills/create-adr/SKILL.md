---
name: create-adr
description: Use when a decision has been made that changes system architecture, a shared contract, or a cross-cutting technical approach, and it should be recorded.
---

# Create ADR

1. Check `docs/adr/` for the next available number (four digits, zero-padded).
2. Use this structure:

```markdown
# ADR NNNN: <Decision title>

## Context

<The problem or forces at play. Why is a decision needed now?>

## Decision

<What was decided, stated plainly.>

## Consequences

<What becomes easier or harder as a result. Be honest about trade-offs.>
```

3. Keep it short — a few paragraphs, not a design doc. Link to `docs/specifications/` or `docs/architecture/` for detail rather than duplicating it.
4. If the decision reverses or supersedes an existing ADR, note that explicitly in both files.
