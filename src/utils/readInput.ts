import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export function readInput(relativePath: string): string {
  const fullPath = resolve(process.cwd(), relativePath);
  return readFileSync(fullPath, 'utf8').trimEnd();
}
