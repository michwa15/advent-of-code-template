import { describe, it, expect } from 'vitest';
import { readInput } from '../../utils/readInput.js';
import { parseInput, part1, part2 } from './main.js';

const TEST_INPUT_PATH = 'src/2025/day_01/test-input.txt';

describe('2025 Day 01', () => {
  const raw = readInput(TEST_INPUT_PATH);
  const lines = parseInput(raw);

  it('part1 example', () => {
    const result = part1(lines);
    // replace with expected result from problem
    expect(result).toBe(3);
  });

  it('part2 example', () => {
    const result = part2(lines);
    // replace with expected result from problem
    expect(result).toBe(6);
  });
});
