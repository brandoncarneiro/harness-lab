import { promises as fs } from 'node:fs';
import path from 'node:path';
import type { HarnessDefinition, HarnessRun } from './types.js';
import { slugify } from './text.js';

export async function createRun(harness: HarnessDefinition, name?: string): Promise<HarnessRun> {
  const createdAt = new Date().toISOString();
  const runName = name ? slugify(name) : `${createdAt.slice(0, 10)}-${harness.id}`;
  const runPath = path.join(process.cwd(), 'runs', runName);

  await fs.mkdir(runPath, { recursive: true });

  const readme = buildRunReadme(harness, createdAt);
  await fs.writeFile(path.join(runPath, 'README.md'), readme, 'utf8');

  for (const [index, stage] of harness.stages.entries()) {
    const number = String(index + 1).padStart(2, '0');
    const fileName = `${number}-${stage.id}.md`;
    const body = buildStageFile(harness, stage.name, stage.description ?? '', stage.outputs ?? []);
    await fs.writeFile(path.join(runPath, fileName), body, 'utf8');
  }

  return {
    harnessId: harness.id,
    harnessName: harness.name,
    path: runPath,
    createdAt,
  };
}

function buildRunReadme(harness: HarnessDefinition, createdAt: string): string {
  return `# ${harness.name} Run\n\nCreated: ${createdAt}\n\nHarness: ${harness.id}\n\n## Purpose\n\n${harness.description}\n\n## Stages\n\n${harness.stages.map((stage, index) => `${index + 1}. ${stage.name}`).join('\n')}\n`;
}

function buildStageFile(harness: HarnessDefinition, stageName: string, description: string, outputs: string[]): string {
  return `# ${stageName}\n\nHarness: ${harness.name}\n\n## Goal\n\n${description || 'Describe the stage goal here.'}\n\n## Output artifacts\n\n${outputs.length ? outputs.map((output) => `- ${output}`).join('\n') : '- Add output artifacts here.'}\n\n## Notes\n\nWrite the stage output here.\n`;
}
