import { build } from 'esbuild';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const directory = await mkdtemp(join(tmpdir(), 'portfolio-tests-'));
try {
  const output = join(directory, 'career-tests.mjs');
  await build({
    entryPoints: ['src/core/infrastructure/local-portfolio-repository.test.ts'],
    bundle: true,
    platform: 'node',
    format: 'esm',
    outfile: output,
  });
  const result = spawnSync(process.execPath, ['--test', output], { stdio: 'inherit' });
  process.exitCode = result.status ?? 1;
} finally {
  await rm(directory, { recursive: true, force: true });
}
