import { match } from "assert";
import { getInput } from "../../helper/input";

export function aoc_03_1(): number {
  const input = getInput('aoc_03');
  const pattern = /mul\((\d+),(\d+)\)/g;
  const operations = [...input.matchAll(pattern)];
  let sum = 0;

  operations.forEach(operation => {
    const [fullOperation, num1, num2] = operation;
    const resultOfOperation = parseInt(num1) * parseInt(num2);
    sum += resultOfOperation;
  });

  return sum;
};

console.log(aoc_03_1());
