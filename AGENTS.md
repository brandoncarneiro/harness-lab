# AGENTS.md

This repository is an open-source project called Harness Lab.

## Project purpose

Harness Lab helps users create inspectable prompt harnesses and local markdown run folders.

A harness is a structured workflow around one or more AI agents. It includes stages, prompts, inputs, outputs, artifacts, approval gates, audits, and improvement loops.

The repo should stay simple, inspectable, and useful.

## Current scope

v0.1 is intentionally small:

- Local TypeScript CLI
- Markdown and YAML artifacts
- Harness templates under `harnesses/`
- No database
- No web app
- No LangChain or LangGraph dependency yet
- No autonomous shell execution

## Coding principles

- Prefer boring, readable code.
- Keep files small.
- Do not introduce heavy frameworks without clear need.
- Do not add networked execution by default.
- All harness stages should produce inspectable artifacts.
- All risky actions should have approval gates.
- Do not hide prompts or generated artifacts.

## Repository structure

- `src/` contains the CLI and core utilities.
- `harnesses/` contains reusable harness definitions.
- `docs/` contains concepts and design docs.
- `runs/` is ignored and used for local generated run artifacts.

## Definition of done

Changes should preserve the core thesis:

Harness Lab is a tool for creating harnesses, not another vague agent framework.
