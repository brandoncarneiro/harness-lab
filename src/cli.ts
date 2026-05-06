#!/usr/bin/env node

import { Command } from 'commander';
import { listHarnesses, loadHarness } from './core/harness.js';
import { createRun } from './core/run-store.js';

const program = new Command();

program
  .name('harness-lab')
  .description('Create, test, and improve agent harnesses through conversation.')
  .version('0.1.0');

program
  .command('list')
  .description('List available harnesses')
  .action(async () => {
    const harnesses = await listHarnesses();
    if (harnesses.length === 0) {
      console.log('No harnesses found.');
      return;
    }

    console.log('Available harnesses:\n');
    for (const harness of harnesses) {
      console.log(`- ${harness}`);
    }
  });

program
  .command('show')
  .argument('<harness>', 'Harness id')
  .description('Show a harness definition')
  .action(async (harnessId: string) => {
    const harness = await loadHarness(harnessId);
    console.log(JSON.stringify(harness, null, 2));
  });

program
  .command('new')
  .argument('<harness>', 'Harness id')
  .option('-n, --name <name>', 'Run name')
  .description('Create a new local run folder for a harness')
  .action(async (harnessId: string, options: { name?: string }) => {
    const harness = await loadHarness(harnessId);
    const run = await createRun(harness, options.name);

    console.log(`Created run: ${run.path}`);
    console.log('\nNext step: open the generated files and start the interview.');
  });

program.parseAsync(process.argv);
