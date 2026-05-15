# Prompt Red Team

Harness: Software Delivery Harness
Stage ID: prompt-redteam
Agent prompt: harnesses/software-delivery/agents/prompt-redteam.md
Approval gate: none

## Goal

Critique the implementation brief before it is sent to a coding agent.

## Inputs

- 02-implementation-brief.md

## Output artifacts

- 03-redteam-report.md

## Stage output

### Blocking issues

None.

### Non-blocking issues

- The brief should explicitly say not to silently change stored email casing.
- The brief should require the agent to report the exact test commands it ran.

### Missing details

- Unknown test framework.
- Unknown form library.

### Suggested revisions

- Ask the coding agent to inspect existing validation patterns before choosing where to trim.
- Require a final response with files changed, tests run, and remaining risk.

### Final risk rating

LOW
