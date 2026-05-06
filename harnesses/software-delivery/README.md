# Software Delivery Harness

The Software Delivery Harness helps people using Claude Code, Codex, Cursor, ChatGPT, or other AI coding tools turn vague software tasks into better implementation prompts and audit loops.

## Workflow

```text
Intake Interview
↓
CTO Planner
↓
Prompt Red Team
↓
CTO Rewrite
↓
Export Implementation Prompt
↓
Implementation in Claude Code, Codex, Cursor, or another coding agent
↓
Code Audit
↓
Final Verdict
```

## Recommended v0.1 defaults

```text
Create branch: ask first
Commit changes: no
Push branch: no
Open PR: no
Merge: never
```

The harness can recommend a branch name, but it should not create, commit, push, or open PRs unless the user explicitly enables that behavior.
