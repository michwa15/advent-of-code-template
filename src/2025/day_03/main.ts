import { readInput } from '../../utils/readInput.js';
import { timeIt } from '../../utils/timing.js';

const INPUT_PATH = 'src/2025/day_03/input.txt';

function parseInput(raw: string) {
  return raw.split('\n');
}

function part1(lines: string[]): number | string {
  var sum = 0;
  lines.forEach(line => {
    var max = 0;
    var firstMaxIdx = 0;
    var secMax = 0;
    for (var i = 0; i < line.length - 1; i++) {
        if (Number(line[i]) > max) {
          max = Number(line[i]);
          firstMaxIdx = i;
        }
    }
    for (var i = firstMaxIdx + 1; i < line.length; i++) {
      if (Number(line[i]) > secMax) {
        secMax = Number(line[i]);
      }
    }
    sum += (max * 10 + secMax);
  })
  return sum;
}

function findNLargestNum(line: string, n: number, initIdx: number, sum: number): number {
  if (n === 13) {
    return sum;
  }
  var maxIdx = 0;
  var max = 0;
  for (var i = initIdx; i < line.length - (12 - n); i++) {
    if (Number(line[i]) > max) {
      max = Number(line[i]);
      maxIdx = i;
    }
  }
  return findNLargestNum(line, n + 1, maxIdx + 1, sum * 10 + max);
}

function part2(lines: string[]): number | string {
  var sum = 0;
  lines.forEach(line => {
    const num = findNLargestNum(line, 1, 0, 0);
    sum += num;
  })
  return sum;
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
