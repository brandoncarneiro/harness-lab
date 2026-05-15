# Harness Lab

Harness Lab is a small TypeScript CLI for working with inspectable prompt harnesses.

A harness is a structured workflow around one or more AI agents. It defines stages, prompts, inputs, outputs, artifacts, approval gates, and audit steps. Harness Lab v0.1 keeps that structure in plain YAML and Markdown so it can be read, edited, reviewed, and versioned.

## Current Status

Harness Lab is an early local tool, not a hosted agent platform.

What it does today:

- Lists harness definitions from `harnesses/`
- Loads and validates harness YAML
- Creates local markdown run folders under `runs/`
- Gives each stage a file with its prompt reference, inputs, outputs, and approval gate
- Ships example harnesses and example run output

What it does not do yet:

- It does not call model APIs
- It does not run a conversation engine
- It does not execute shell commands or tool actions
- It does not store runs in a database
- It does not provide a web app

## Install

Requirements:

- Node.js 20 or newer
- npm

From a local clone:

```bash
npm install
npm run build
```

For local CLI development:

```bash
npm run dev -- list
```

After building, you can run the compiled CLI:

```bash
npm start -- list
```

## Quickstart

List the included harnesses:

```bash
npm run dev -- list
```

Show a harness definition:

```bash
npm run dev -- show software-delivery
```

Create a local run scaffold:

```bash
npm run dev -- new software-delivery --name signup-validation-fix
```

That creates:

```text
runs/signup-validation-fix/
  README.md
  01-intake-interview.md
  02-cto-planner.md
  03-prompt-redteam.md
  04-cto-rewrite.md
  05-export-prompt.md
  06-code-audit.md
  07-final-verdict.md
```

`runs/` is ignored by git. Treat it as local working output. Keep polished examples under `examples/`.

## CLI Commands

```bash
harness-lab list
```

Lists harness IDs found in the harness directory.

```bash
harness-lab show <harness-id>
```

Prints the parsed harness definition as JSON.

```bash
harness-lab new <harness-id> --name <run-name>
```

Creates a new local markdown run folder. Harness Lab refuses to overwrite an existing run with the same name.

Useful options:

```bash
harness-lab --harness-dir ./harnesses list
harness-lab --harness-dir ./harnesses new software-delivery --runs-dir ./runs --name demo
```

If no `--harness-dir` is provided, the CLI uses `./harnesses` from the current working directory when present, then falls back to the bundled harnesses.

## Harness YAML Format

Harness definitions live at:

```text
harnesses/<harness-id>/harness.yaml
```

Minimal example:

```yaml
id: software-delivery
name: Software Delivery Harness
description: Turn a rough software task into a hardened implementation prompt and audit loop.
version: 0.1.0
maturity: prompt
stages:
  - id: intake-interview
    name: Intake Interview
    agent: agents/intake-interviewer.md
    description: Gather task details, constraints, tests, and acceptance criteria.
    outputs:
      - 01-task-context.md
    approval: none
  - id: final-verdict
    name: Final Verdict
    description: Decide whether to accept, accept with risks, revise, or escalate.
    inputs:
      - 06-audit-verdict.md
    outputs:
      - 07-final-verdict.md
    approval: required
```

Required top-level fields:

- `id`
- `name`
- `description`
- `version`
- `maturity`
- `stages`

Supported maturity values:

- `prompt`
- `local`
- `tool-integrated`
- `production`

Supported approval values:

- `none`
- `recommended`
- `required`

## Example Workflow

Use the included `software-delivery` harness when you want to turn a rough software task into a clearer implementation prompt and review loop.

```bash
npm run dev -- new software-delivery --name example-signup-fix
```

Then work through the generated files in order:

1. Fill in `01-intake-interview.md` with the task context.
2. Use the CTO planner prompt to produce `02-implementation-brief.md`.
3. Red-team the brief in `03-prompt-redteam.md`.
4. Rewrite the final coding prompt in `04-cto-rewrite.md`.
5. Export the implementation prompt in `05-export-prompt.md`.
6. Paste implementation evidence into `06-code-audit.md`.
7. Record the final decision in `07-final-verdict.md`.

## Example Output

A complete illustrative run is included at:

```text
examples/software-delivery-run/
```

It is intentionally committed because it is documentation, not generated working output. It shows what a completed run can look like after a human fills in each stage.

## Development

Install dependencies:

```bash
npm install
```

Run the source CLI:

```bash
npm run dev -- list
```

Build TypeScript:

```bash
npm run build
```

Run the compiled CLI:

```bash
npm start -- list
```

## Testing

Run tests:

```bash
npm test
```

The test suite covers harness loading, harness listing, run creation, overwrite protection, and basic CLI behavior.

## Roadmap

Near-term:

- Better validation errors for malformed harness YAML
- More example harnesses and completed run examples
- Optional export helpers for sharing prompts with coding agents

Later:

- Model-backed local runners
- Explicit approval-gate handling
- Run audit summaries
- Tool integrations
- Persistent run history

The project should stay simple and inspectable. A clean local prompt-harness workflow is the v0.1 goal.
