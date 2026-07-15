# @volume/auth

Owned by `backend-engineer`, reviewed by `security-reviewer`. Empty stub in Phase 0.

Wraps the chosen auth provider behind an interface so `apps/api` and `apps/web` never call a third-party auth SDK directly. Session/token handling is a security-sensitive boundary — any change here requires `security-reviewer` sign-off.
