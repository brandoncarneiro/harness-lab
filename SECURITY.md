# Security Policy

Harness Lab v0.1 is a local CLI. It does not call model APIs, execute shell commands, store secrets, or run networked workflows by default.

## Reporting

Please report security issues through GitHub Security Advisories for this repository when available.

Do not post exploitable details in a public issue before the maintainer has had a chance to review and fix the problem.

## Scope

In scope:

- Unsafe file writes
- Path traversal
- Secret exposure in examples or templates
- Dependency vulnerabilities
- CLI behavior that could overwrite user work

Out of scope:

- Vulnerabilities in unrelated downstream harnesses
- Issues caused by manually pasting prompts into third-party tools

## Supported Versions

Only the current `main` branch is supported before a stable release line exists.
