export function inputManager(input: string) {
  const inputSection = input.split('\n');


  const availableTowels = inputSection[0].split(', ');
  const requestTowels = inputSection.splice(2);

  return { availableTowels, requestTowels };
};
