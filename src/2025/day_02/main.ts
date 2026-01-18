import { readInput } from '../../utils/readInput.js';
import { timeIt } from '../../utils/timing.js';

const INPUT_PATH = 'src/2025/day_02/input.txt';

function parseInput(raw: string) {
  return raw.split(',');
}

function part1(ranges: string[]): number | string {
  var sum = 0;
  const mapInvalid = new Map();
  ranges.forEach(range => {
    const [startPoint, endPoint] = range.split('-');
    var curr = Number(startPoint);
    const end = Number(endPoint);
    while (curr <= end) {
      if (mapInvalid.has(curr)) {
        if (mapInvalid.get(curr)) {
          sum += curr;
        }
      }
      else if (isInvalid(curr)) {
        sum += curr;
        mapInvalid.set(curr, true);
      } else {
        mapInvalid.set(curr, false);
      }
      curr++;
    }
  })
  return sum;
}

// part 1
// function isInvalid(curr: Number): boolean {
//   const currStr = curr.toString();
//   const len = currStr.length;
//   const firstHalf = currStr.substring(0, Math.floor(len / 2));
//   const secondHalf = currStr.substring(Math.floor(len / 2));
//   return firstHalf === secondHalf;
// }

// part2
function isInvalid(curr: Number): boolean {
  const currStr = curr.toString();
  const len = currStr.length;
  var currIdx = 1;
  const maxIdx = Math.floor(len / 2);
  while (currIdx <= maxIdx) {
    const str = currStr.substring(0, currIdx);
    const elements = currStr.split(str).filter(element => element.length > 0);
    if (elements.length === 0) {
      return true;
    }
    currIdx++;
  }
  return false;
}

function part2(ranges: string[]): number | string {
  return part1(ranges);
}

function main() {
  const raw = readInput(INPUT_PATH);
  const ranges = parseInput(raw);

  timeIt('Part 1', () => {
    const answer1 = part1(ranges);
    console.log('Part 1:', answer1);
    return answer1;
  });

  timeIt('Part 2', () => {
    const answer2 = part2(ranges);
    console.log('Part 2:', answer2);
    return answer2;
  });
}

if (import.meta.url === 'file://' + process.argv[1]) {
  main();
}

export { parseInput, part1, part2 };
