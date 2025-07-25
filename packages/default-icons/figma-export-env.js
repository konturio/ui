import { execSync } from 'child_process';
import { rmSync, existsSync, readFileSync } from 'fs';
import path from 'path';

function getToken() {
  if (process.env.FIGMA_TOKEN) return process.env.FIGMA_TOKEN;
  const envPath = path.resolve('.env.local');
  if (existsSync(envPath)) {
    const content = readFileSync(envPath, 'utf8');
    const match = content.match(/^FIGMA_TOKEN=(.*)$/m);
    if (match) return match[1].trim();
  }
  return null;
}

const token = getToken();
if (!token) {
  console.error('FIGMA_TOKEN is missing');
  process.exit(1);
}

rmSync('src/figma-icons', { recursive: true, force: true });
execSync('figma-export use-config .figmaexportrc.cjs', {
  stdio: 'inherit',
  env: { ...process.env, FIGMA_TOKEN: token },
});
execSync('prettier --write src/figma-icons/*', { stdio: 'inherit' });
