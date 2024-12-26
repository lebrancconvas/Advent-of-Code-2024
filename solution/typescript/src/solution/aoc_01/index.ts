import { getInput } from "../../helper/input";

function aoc_01_1(): number {
  // Get Input
  const input = getInput('aoc_01/input.txt');

  // Organize Input
  const data = input.split('\n').map((x) => x.split('   '));
  const leftRowData = data.map((x) => parseInt(x[0]));
  const rightRowData = data.map((x) => parseInt(x[1]));

  // Sort array
  const leftRowSorted = leftRowData.sort((a, b) => a - b);
  const rightRowSorted = rightRowData.sort((a, b) => a - b);

  // find difference from each array at the same index and sum it.
  let result = 0;
  for(let i = 0; i < 1000; i++) {
    result += Math.abs(leftRowSorted[i] - rightRowSorted[i]);
  }


  return result;
};

function aoc_01_2(): number {
  // Get Input
  const input = getInput('aoc_01/input.txt');

  // Organize Input
  const data = input.split('\n').map((x) => x.split('   '));
  const leftRowData = data.map((x) => parseInt(x[0]));
  const rightRowData = data.map((x) => parseInt(x[1]));

  // Finding the result.
  let result = 0;
  for(let i = 0; i < 1000; i++) {
    result += leftRowData[i] * rightRowData.filter(x => x === leftRowData[i]).length;
  }

  return result;
};

