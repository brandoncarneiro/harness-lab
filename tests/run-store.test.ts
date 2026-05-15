import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { createRun } from '../src/core/run-store.js';
import type { HarnessDefinition } from '../src/core/types.js';

test('creates a run folder with README and stage files', async (t) => {
  const runsDir = await mkdtemp(path.join(os.tmpdir(), 'harness-lab-runs-'));
  t.after(() => rm(runsDir, { recursive: true, force: true }));

  const run = await createRun(demoHarness, {
    name: 'Signup Validation Fix',
    runsDir,
    createdAt: '2026-05-15T12:00:00.000Z',
  });

  assert.equal(path.basename(run.path), 'signup-validation-fix');
  assert.equal(run.harnessId, 'software-delivery');
  assert.equal(run.createdAt, '2026-05-15T12:00:00.000Z');

  const readme = await readFile(path.join(run.path, 'README.md'), 'utf8');
  assert.match(readme, /Harness Lab v0\.1 creates local markdown scaffolds/);
  assert.match(readme, /1\. Intake Interview/);

  const stage = await readFile(path.join(run.path, '01-intake-interview.md'), 'utf8');
  assert.match(stage, /Agent prompt: agents\/intake-interviewer\.md/);
  assert.match(stage, /Approval gate: none/);
  assert.match(stage, /- 01-task-context\.md/);
});

test('uses a timestamped default run name and does not overwrite existing runs', async (t) => {
  const runsDir = await mkdtemp(path.join(os.tmpdir(), 'harness-lab-runs-'));
  t.after(() => rm(runsDir, { recursive: true, force: true }));

  const firstRun = await createRun(demoHarness, {
    runsDir,
    createdAt: '2026-05-15T12:34:56.000Z',
  });

  assert.equal(path.basename(firstRun.path), '2026-05-15t12-34-56-software-delivery');

  await assert.rejects(
    () =>
      createRun(demoHarness, {
        runsDir,
        createdAt: '2026-05-15T12:34:56.000Z',
      }),
    /Run already exists/,
  );
});

const demoHarness: HarnessDefinition = {
  id: 'software-delivery',
  name: 'Software Delivery Harness',
  description: 'Turn a rough software task into a hardened implementation prompt and audit loop.',
  version: '0.1.0',
  maturity: 'prompt',
  stages: [
    {
      id: 'intake-interview',
      name: 'Intake Interview',
      agent: 'agents/intake-interviewer.md',
      description: 'Gather task details, constraints, tests, and acceptance criteria.',
      outputs: ['01-task-context.md'],
      approval: 'none',
    },
    {
      id: 'final-verdict',
      name: 'Final Verdict',
      description: 'Decide whether the implementation is acceptable.',
      inputs: ['06-audit-verdict.md'],
      outputs: ['07-final-verdict.md'],
      approval: 'required',
    },
  ],
};
