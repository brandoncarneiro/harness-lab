# Intake Interview

Harness: Software Delivery Harness
Stage ID: intake-interview
Agent prompt: harnesses/software-delivery/agents/intake-interviewer.md
Approval gate: none

## Goal

Gather task details, repo context, constraints, branch strategy, tests, and acceptance criteria.

## Inputs

- User request

## Output artifacts

- 01-task-context.md

## Stage output

### Objective

Fix the signup form so blank or whitespace-only email addresses are rejected before submit.

### Context

- Repo: `example-app`
- Likely files: signup form component and validation helper
- Change type: bug fix
- User-facing behavior: whitespace-only email values should show the same validation error as empty values

### Constraints

- Do not change auth providers
- Do not change API contracts
- Do not touch billing, deployment, or database code
- Keep the patch surgical

### Tests

- Run the signup validation tests if present
- Run the app test suite if targeted tests are not available

### Acceptance criteria

- Empty email is rejected
- Whitespace-only email is rejected
- Valid email still submits
- Existing password validation behavior is unchanged
