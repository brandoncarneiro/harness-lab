# Runners

Harness Lab starts with a simple local markdown runner.

Future runners may include:

- LangGraph runner
- OpenAI Agents SDK runner
- Claude Code runner
- Codex runner
- GitHub issue runner
- GitHub PR audit runner

## Runner levels

### Prompt runner

Creates artifacts and prompts for manual execution.

### Local runner

Calls model APIs locally and saves outputs.

### Tool-integrated runner

Connects to tools like GitHub, Linear, Slack, Codex, Claude Code, or local test runners.

### Production runner

Adds durable state, retries, traces, evals, approval gates, and deployment controls.
