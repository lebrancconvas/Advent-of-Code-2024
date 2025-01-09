import { getInput } from "../../helper/input";

export function aoc_19_1() {

  const input = getInput('aoc_19');

  const inputSection = input.split('\n');

  const availableTowels = inputSection[0].split(', ');
  const requestTowels = inputSection.splice(2);

  return requestTowels;

};

export function aoc_19_2() {

  const input = getInput('aoc_19');

  const inputSection = input.split('\n');

  const availableTowels = inputSection[0].split(', ');
  const requestTowels = inputSection.splice(2);
};

console.log(aoc_19_1());
// console.log(aoc_19_2());
