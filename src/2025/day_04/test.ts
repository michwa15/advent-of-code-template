import { describe, it, expect } from 'vitest';
import { readInput } from '../../utils/readInput.js';
import { parseInput, part1, part2 } from './main.js';

const TEST_INPUT_PATH = 'src/2025/day_04/test-input.txt';

describe('2025 Day 04', () => {
  const raw = readInput(TEST_INPUT_PATH);
  const lines = parseInput(raw);
  const grid = lines.map(line => line.split(''))

  it('part1 example', () => {
    const result = part1(grid);
    // replace with expected result from problem
    expect(result).toBe(13);
  });

  it('part2 example', () => {
    const result = part2(grid);
    // replace with expected result from problem
    expect(result).toBe(43);
  });
});
