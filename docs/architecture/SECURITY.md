# Security

Phase 0 baseline — expanded as auth, uploads, and social features are implemented.

## Principles

- Authentication and session handling live only in `packages/auth`. No app calls a third-party auth SDK directly.
- User-generated content (assets, manifests) is untrusted input — validated against `packages/volume-schema` at every ingestion point, not just at the client.
- Asset uploads are handled through `packages/storage`; no direct client-to-bucket credentials are issued without scoping and expiry.
- Rate limiting and abuse prevention are platform-level concerns owned by `backend-engineer`, reviewed by `security-reviewer`.
- Neural/biometric data (future Dawn input) requires an explicit privacy review before any capture, storage, or transmission code is written — this is flagged as especially sensitive per the product spec.

## Review process

Any change touching `packages/auth`, `packages/storage` credential issuance, user-generated content ingestion, or moderation is reviewed by the `security-reviewer` agent (read-only; see `.claude/agents/security-reviewer.md`) before merge.
