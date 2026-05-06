# Harness Spec

Harness Lab uses a simple YAML spec for v0.1.

## Example

```yaml
id: harness-creator
name: Harness Creator
description: A meta-harness that interviews a user and creates a new agent harness from the conversation.
version: 0.1.0
maturity: prompt
stages:
  - id: intake-interview
    name: Intake Interview
    agent: agents/intake-interviewer.md
    description: Interview the user about the workflow.
    outputs:
      - harness-design-brief.md
    approval: none
```

## Fields

### id

Stable machine-readable harness id.

### name

Human-readable harness name.

### description

One-sentence purpose.

### version

Harness version.

### maturity

One of:

- prompt
- local
- tool-integrated
- production

### stages

Ordered workflow stages.

Each stage should define:

- id
- name
- agent
- description
- inputs
- outputs
- approval

## Approval values

- none
- recommended
- required
