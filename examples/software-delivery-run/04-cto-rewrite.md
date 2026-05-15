# CTO Rewrite

Harness: Software Delivery Harness
Stage ID: cto-rewrite
Agent prompt: harnesses/software-delivery/agents/cto-rewriter.md
Approval gate: recommended

## Goal

Incorporate red-team findings and produce a final implementation prompt.

## Inputs

- 02-implementation-brief.md
- 03-redteam-report.md

## Output artifacts

- 04-final-implementation-prompt.md

## Stage output

### Final implementation prompt

Fix the signup email validation bug.

Read the signup form and existing validation helper before editing. Make the smallest change that causes blank or whitespace-only email values to be rejected before submit. Reuse the repo's existing validation pattern. Do not introduce a new validation library.

In scope:

- Signup email validation
- Targeted validation tests

Out of scope:

- Auth provider changes
- API contract changes unless validation already lives in the API layer
- Billing, deployment, database, or unrelated form changes
- UI redesign
- Email casing changes

Acceptance criteria:

- Empty email is invalid
- Whitespace-only email is invalid
- Valid email remains valid
- Password validation is unchanged

Before finishing, run the relevant test command. In the final response, report files changed, tests run, and any remaining risk.
