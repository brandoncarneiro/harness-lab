# Contributing

Harness Lab is intentionally small. Contributions should keep the project inspectable and easy to run locally.

## Setup

```bash
npm install
npm run build
npm test
```

## Guidelines

- Keep harness definitions in plain YAML and Markdown.
- Do not commit generated `runs/` output.
- Put intentional examples under `examples/`.
- Avoid adding frameworks or networked execution without a clear issue and maintainer agreement.
- Add or update tests for CLI and core behavior changes.
- Keep documentation honest about what the project does today.

## Pull Requests

Before opening a pull request, run:

```bash
npm run build
npm test
```

Include a short summary, the checks you ran, and any remaining risk.
