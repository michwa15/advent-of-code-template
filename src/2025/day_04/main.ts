import { readInput } from '../../utils/readInput.js';
import { timeIt } from '../../utils/timing.js';

const INPUT_PATH = 'src/2025/day_04/input.txt';

function parseInput(raw: string) {
  return raw.split('\n');
}

function part1(grid: string[][]): number {
  var result = 0;
  let locations = new Map();
  grid.forEach((row, rowIdx) => {
    row.forEach(((val, colIdx) => {
      if (grid[rowIdx][colIdx] === "@" && canAccess(rowIdx, colIdx, grid)) {
        result++;
        locations.set(`${rowIdx}, ${colIdx}`, true);
      }
    }))
  });

  for (const key of locations.keys()) {
    const [row, col] = key.split(",").map(Number);
    grid[row][col] = ".";
  }

  return result;
}

function canAccess(rowIdx: number, colIdx: number, grid: string[][]): boolean {
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [ 0, -1],          [ 0, 1],
    [ 1, -1], [ 1, 0], [ 1, 1],
  ];

  let atCount = 0;

  for (const [dRow, dCol] of directions) {
    const newRow = rowIdx + dRow;
    const newCol = colIdx + dCol;

    if (
        newRow >= 0 &&
        newRow < grid.length &&
        newCol >= 0 &&
        newCol < grid[0].length
    ) {
      if (grid[newRow][newCol] === "@") {
        atCount++;
      }
    }
  }

  return atCount < 4;
}

function part2(grid: string[][]): number {
  let currIteration = part1(grid);
  let sum = 0;
  while (currIteration > 0) {
    sum += currIteration;
    currIteration = part1(grid);
  }
  return sum;
}

function main() {
  const raw = readInput(INPUT_PATH);
  const lines = parseInput(raw);
  const grid = lines.map(line => line.split(''))

  // timeIt('Part 1', () => {
  //   const answer1 = part1(grid);
  //   console.log('Part 1:', answer1);
  //   return answer1;
  // });

  timeIt('Part 2', () => {
    const answer2 = part2(grid);
    console.log('Part 2:', answer2);
    return answer2;
  });
}

if (import.meta.url === 'file://' + process.argv[1]) {
  main();
}

export { parseInput, part1, part2 };
