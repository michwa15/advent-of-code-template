import { readInput } from '../../utils/readInput.js';
import { timeIt } from '../../utils/timing.js';

const INPUT_PATH = 'src/2025/day_01/input.txt';

function parseInput(raw: string) {
  return raw.split('\n');
}

function part1(lines: string[]): number | string {
  var res = 0;
  var currentVal = 50;
  for (const line of lines) {
    const val = Number(line.substring(1)) % 100;
    if (line.startsWith('L')) {
      currentVal -= val;
      if (currentVal < 0) {
        currentVal += 100;
      }
    } else {
      currentVal += val;
      if (currentVal >= 100) {
        currentVal -= 100;
      }
    }
    if( currentVal == 0) {
      res++;
    }
  }
  return res;
}

function part2(lines: string[]): number | string {
  var res = 0;
  var currentVal = 50;
  for (const line of lines) {
    const num = Number(line.substring(1));
    const val = num % 100;
    if (line.startsWith('L')) {
      currentVal -= val;
      if (currentVal < 0) {
        if (currentVal + val != 0) {
          res++;
        }
        currentVal += 100;
      }
    } else {
      currentVal += val;
      if (currentVal >= 100) {
        if (currentVal > 100) {
          res++;
        }
        currentVal -= 100;
      }
    }
    if(currentVal === 0) {
      res++;
    }
    res += Math.floor(num / 100);
  }
  return res;
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

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { parseInput, part1, part2 };
