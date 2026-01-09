import { readInput } from '../../utils/readInput.js';
import { timeIt } from '../../utils/timing.js';

const INPUT_PATH = 'src/2025/day_02/input.txt';

function parseInput(raw: string) {
  return raw.split('\n');
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
