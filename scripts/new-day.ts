import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

function usage(): never {
  console.error('Usage: npm run new-day -- <year> <day>');
  process.exit(1);
}

const [, , yearArg, dayArg] = process.argv;

if (!yearArg || !dayArg) {
  usage();
}

const year = yearArg.trim();
const dayNum = Number(dayArg);

if (!/^[0-9]{4}$/.test(year) || !Number.isInteger(dayNum) || dayNum < 1 || dayNum > 25) {
  usage();
}

const dayPadded = dayNum.toString().padStart(2, '0');
const dayFolder = `day_${dayPadded}`;
const baseDir = join('src', year, dayFolder);

if (existsSync(baseDir)) {
  console.error(`Folder already exists: ${baseDir}`);
  process.exit(1);
}

mkdirSync(baseDir, { recursive: true });

const inputPath = join(baseDir, 'input.txt');
const testInputPath = join(baseDir, 'test-input.txt');
const mainPath = join(baseDir, 'main.ts');
const testPath = join(baseDir, 'test.ts');

const mainSource = `import { readInput } from '../../utils/readInput.js';
import { timeIt } from '../../utils/timing.js';

const INPUT_PATH = 'src/${year}/${dayFolder}/input.txt';

function parseInput(raw: string) {
  return raw.split('\\n');
}

function part1(lines: string[]): number | string {
  // TODO: implement
  return 0;
}

function part2(lines: string[]): number | string {
  // TODO: implement
  return 0;
}

function main() {
  const raw = readInput(INPUT_PATH);
  const lines = parseInput(raw);

  timeIt('Part 1', () => {
    const answer1 = part1(lines);
    console.log('Part 1:', answer1);
    return answer1;
  });

  timeIt('Part 2', () => {
    const answer2 = part2(lines);
    console.log('Part 2:', answer2);
    return answer2;
  });
}

if (import.meta.url === 'file://' + process.argv[1]) {
  main();
}

export { parseInput, part1, part2 };
`;

const testSource = `import { describe, it, expect } from 'vitest';
import { readInput } from '../../utils/readInput.js';
import { parseInput, part1, part2 } from './main.js';

const TEST_INPUT_PATH = 'src/${year}/${dayFolder}/test-input.txt';

describe('${year} Day ${dayPadded}', () => {
  const raw = readInput(TEST_INPUT_PATH);
  const lines = parseInput(raw);

  it('part1 example', () => {
    const result = part1(lines);
    // replace with expected result from problem
    expect(result).toBe(0);
  });

  it('part2 example', () => {
    const result = part2(lines);
    // replace with expected result from problem
    expect(result).toBe(0);
  });
});
`;

writeFileSync(mainPath, mainSource, 'utf8');
writeFileSync(testPath, testSource, 'utf8');
writeFileSync(inputPath, '', 'utf8');
writeFileSync(testInputPath, '', 'utf8');

console.log(`Created ${baseDir}`);
