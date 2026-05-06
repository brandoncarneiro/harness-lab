# Harness Creator

The Harness Creator is the first meta-harness in Harness Lab.

Its job is to help a user create a new harness through conversation.

It does not start by asking the user to write YAML, pick a framework, or define nodes and edges. It starts by understanding the work the user is already doing manually.

## Workflow

```text
Intake Interview
↓
Harness Architect
↓
Harness Red Team
↓
Harness Generator
↓
Harness Audit
↓
Improvement Plan
```

## What it produces

- `harness-design-brief.md`
- `harness.yaml`
- `redteam-report.md`
- `agents/*.md`
- `examples/*`
- `audit-verdict.md`
- `harness-improvement-plan.md`

## Default posture

Start as a prompt harness.

Do not automate tool actions until the user has proven the workflow manually and identified the right approval gates.
