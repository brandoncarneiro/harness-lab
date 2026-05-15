# CTO Planner

Harness: Software Delivery Harness
Stage ID: cto-planner
Agent prompt: harnesses/software-delivery/agents/cto-planner.md
Approval gate: none

## Goal

Convert the task context into a precise implementation brief.

## Inputs

- 01-task-context.md

## Output artifacts

- 02-implementation-brief.md

## Stage output

### Implementation brief

Inspect the signup form and validation helper before editing. Find where the email value is checked for emptiness. Normalize the submitted email by trimming whitespace before validation, or update the existing validation helper to treat trimmed empty strings as invalid.

### Required behavior

- `""` is invalid
- `"   "` is invalid
- `" user@example.com "` is valid if surrounding whitespace is currently allowed elsewhere in the flow
- Existing password validation is unchanged

### Out of scope

- New validation library
- Auth provider changes
- API route changes unless the existing validation already lives there
- UI redesign

### Test plan

- Add or update unit tests for empty, whitespace-only, and valid email input
- Run the targeted signup validation tests
- Run the full test command if the repo has no targeted test
