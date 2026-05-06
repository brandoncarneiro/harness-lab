import { promises as fs } from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import type { HarnessDefinition } from './types.js';

const HARNESS_DIR = path.join(process.cwd(), 'harnesses');

export async function listHarnesses(): Promise<string[]> {
  try {
    const entries = await fs.readdir(HARNESS_DIR, { withFileTypes: true });
    return entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort();
  } catch {
    return [];
  }
}

export async function loadHarness(id: string): Promise<HarnessDefinition> {
  const harnessPath = path.join(HARNESS_DIR, id, 'harness.yaml');
  const content = await fs.readFile(harnessPath, 'utf8');
  return yaml.load(content) as HarnessDefinition;
}
