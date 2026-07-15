---
name: verify-feature
description: Use after implementing a feature to confirm it actually works, not just that checks pass.
---

# Verify Feature

Passing `typecheck`/`lint`/`test` is necessary but not sufficient. Answer: **can a user actually complete the required flow?**

1. Run typecheck, lint, and unit tests for every affected package (`pnpm --filter <pkg> typecheck|lint|test`).
2. Run contract tests if a shared schema changed.
3. Run integration/e2e tests under `tests/` if the feature crosses layers.
4. For anything with a UI or API surface, actually exercise it: start the dev server, drive the flow (browser or HTTP client), and observe the real output — not just that a component renders or a route returns 200.
5. Re-check the acceptance criteria from the task brief one by one — each must be demonstrably true, not assumed.
6. If you cannot exercise a surface directly (no browser/runtime available), say so explicitly in your report rather than claiming success.
