# Harness Lab

Create, test, and improve agent harnesses through conversation.

Harness Lab is an open-source toolkit for turning messy AI workflows into structured, inspectable agent harnesses.

Most people using AI tools are still acting as the harness manually. They write a prompt, paste it into ChatGPT, Claude, Codex, Claude Code, Cursor, or their terminal, inspect the output, rewrite the prompt, ask another model to review it, paste the result somewhere else, and repeat.

Harness Lab helps replace that copy-paste loop with a clear workflow:

```text
Talk -> Design -> Red Team -> Generate -> Run -> Audit -> Improve
```

## Why Harness Lab exists

Prompt engineering got people started.

But prompts alone do not create reliable AI workflows.

A prompt is an instruction.

A harness is the system around the instruction.

A good harness defines:

- What the agent is trying to accomplish
- What context it needs
- What tools it can use
- What it is allowed to do automatically
- What requires human approval
- What artifacts it must produce
- How its work is audited
- What counts as done

Harness Lab exists because builders need a simple way to create these systems without starting from a blank framework, writing a pile of glue code, or manually copying work between AI tools all day.

## What is an agent harness?

An agent harness is a structured workflow around one or more AI agents.

It usually includes:

- Stages
- Agent roles
- Prompts
- Inputs and outputs
- Tool permissions
- Approval gates
- Audit checks
- Saved artifacts
- Retry and improvement loops

The model is not the harness.

The harness is the operating system around the model.

## What Harness Lab does

Harness Lab helps you create harnesses by talking through the workflow you want.

Instead of starting with code, you start with a conversation:

> I want a CTO-level agent to turn my software idea into an implementation prompt, a red-team agent to critique it, a coding agent to build it, and an audit agent to review the result.

Harness Lab turns that into a structured harness with stages, prompts, artifacts, and checks.

## Repository model

Harness Lab is both:

1. A tool for creating harnesses.
2. A library where harnesses can live.

The first included harness is the Harness Creator itself. It is a meta-harness that interviews the user and creates new harnesses.

Future harnesses can be added under `harnesses/`.

```text
harnesses/
  harness-creator/
  software-delivery/
  research-council/
  sales-outbound/
  code-audit/
  customer-insights/
```

## Core workflow

Harness Lab follows a seven-step loop.

### 1. Talk

Describe the manual AI workflow you want to stop doing by hand.

Harness Lab asks clarifying questions about the work, the tools involved, the outputs you need, the risks, and the definition of done.

Output:

`harness-design-brief.md`

### 2. Design

The Harness Architect turns the conversation into a structured workflow.

It defines the stages, agent roles, inputs, outputs, approval gates, and artifacts.

Output:

`harness.yaml`

### 3. Red Team

The Harness Red Team critiques the proposed workflow before it is used.

It looks for ambiguity, missing artifacts, weak audit criteria, unsafe permissions, scope creep, and unnecessary complexity.

Output:

`redteam-report.md`

### 4. Generate

The Harness Generator creates the harness files.

This includes agent prompts, stage definitions, example inputs, example outputs, and a harness-specific README.

Outputs:

`harness.yaml`

`agents/*.md`

`examples/*`

### 5. Run

The harness runs stage by stage.

In v0.1, Harness Lab is local and inspectable. Each stage produces a markdown artifact that can be reviewed, edited, copied, reused, or audited.

Output:

`runs/<run-name>/*`

### 6. Audit

The Audit Agent reviews the run output against the original goal and acceptance criteria.

It returns a clear verdict:

- PASS
- PASS WITH RISKS
- FAIL

Output:

`audit-verdict.md`

### 7. Improve

The Improvement Agent turns repeated failures, audit findings, and user feedback into better harness instructions.

Output:

`harness-improvement-plan.md`

## The interview process

Harness Lab creates harnesses through an interview.

The goal is not to ask random questions. The goal is to uncover the workflow, risks, artifacts, approval points, and definition of done.

### Core harness interview

These questions apply to any harness.

#### 1. What are you trying to accomplish?

Describe the outcome you want.

Examples:

- Turn rough software ideas into implementation prompts
- Review AI-generated code before merging
- Convert customer calls into product insights
- Create sales emails from account research
- Compare multiple model responses before producing a final answer

#### 2. What are you doing manually today?

Describe the current workflow.

Examples:

- I write a prompt in ChatGPT
- I paste it into Claude Code
- I copy the diff into Codex
- I ask another model to audit it
- I rewrite the prompt based on failures
- I manually track what changed

#### 3. What tools are involved?

List the tools, apps, or systems currently used.

Examples:

- ChatGPT
- Claude
- Claude Code
- Codex
- Cursor
- GitHub
- Linear
- Slack
- Google Docs
- Local terminal
- Test runner

#### 4. What should the harness produce?

Every stage should create an artifact.

Examples:

- Implementation brief
- Red-team report
- Final prompt
- Git diff review
- Audit verdict
- PR summary
- Customer insights report
- Decision memo

#### 5. What should the harness not do?

Define boundaries.

Examples:

- Do not deploy to production
- Do not merge pull requests
- Do not modify database schemas
- Do not change public APIs
- Do not refactor unrelated code
- Do not send messages without approval

#### 6. What needs human approval?

Decide where the workflow should stop and ask.

Examples:

- Before editing files
- Before creating a branch
- Before installing dependencies
- Before pushing commits
- Before opening a PR
- Before sending an external message
- Before deleting or overwriting data

#### 7. What does success look like?

Define the acceptance criteria.

Examples:

- Tests pass
- Diff is limited to relevant files
- Output matches the requested format
- Summary includes risks
- Human reviewer can approve the result
- The workflow saves all artifacts

#### 8. What does failure look like?

Define failure clearly.

Examples:

- The agent changes unrelated files
- The output is too vague
- Tests fail
- The agent skips the audit step
- The workflow requires too much manual copy-paste
- The result cannot be verified

#### 9. What should be audited?

Decide what the audit agent checks.

Examples:

- Correctness
- Completeness
- Scope control
- Security risks
- Data privacy risks
- Test coverage
- Simplicity
- Consistency with existing patterns

#### 10. How should the harness improve over time?

A harness should get better after failed runs.

Examples:

- Add missing questions to the interview
- Tighten approval gates
- Improve stage prompts
- Add better examples
- Add stronger audit checks
- Update the definition of done

## Included harnesses

### Harness Creator

The first included harness is `harness-creator`.

This is the meta-harness that helps users create new harnesses through conversation.

It asks questions, designs a workflow, red-teams the workflow, generates files, and creates an improvement loop.

### Software Delivery

The `software-delivery` harness is the first practical example harness.

It helps people using Claude Code, Codex, Cursor, ChatGPT, or other AI coding tools turn vague software tasks into better implementation prompts and audit loops.

## Harness maturity levels

Harness Lab is designed to support different levels of automation.

### Level 1: Prompt Harness

Creates structured prompts and markdown artifacts.

The user still runs the prompts manually in ChatGPT, Claude, Codex, Claude Code, Cursor, or another tool.

### Level 2: Local Harness

Runs stages locally using model APIs and saves outputs.

### Level 3: Tool-Integrated Harness

Connects to tools like GitHub, Linear, Slack, Claude Code, Codex, or local test runners.

### Level 4: Production Harness

Adds durable state, approval gates, retries, evals, traces, and execution backends like LangGraph or other orchestration systems.

Harness Lab starts simple and grows with the workflow.

## Design principles

### Every stage produces an artifact

No vague agent chatter. Each stage must produce something inspectable.

### Workflows beat roleplay

Agents should have clear jobs, inputs, outputs, and success criteria.

### Human approval matters

Risky actions should require explicit approval.

### Start manual, then automate

A workflow should work as a prompt harness before becoming a fully automated system.

### Keep the harness inspectable

Users should be able to see the prompts, outputs, assumptions, and audit results.

### Improve the harness over time

A failed run should become a better harness, not just another frustrating AI session.

## Project status

Harness Lab is early.

The first goal is simple:

Create a local, inspectable tool for designing and running agent harnesses without needing to start with a heavy framework.

v0.1 focuses on:

- Harness design through conversation
- Markdown/YAML harness specs
- A Harness Creator meta-harness
- A Software Delivery example harness
- Saved run artifacts
- Audit prompts
- A simple local CLI

Future versions may add:

- LangGraph runner
- OpenAI Agents SDK runner
- Claude Code integration
- Codex integration
- GitHub issue and PR workflows
- Visual harness designer
- Harness template library

## Quick start

```bash
npm install
npm run build
npm run harness -- list
npm run harness -- new harness-creator
```

## Who this is for

Harness Lab is for builders who are already using AI tools but are tired of being the human glue between them.

It is for people who want to move from prompt chaos to repeatable agent workflows.

## License

MIT
