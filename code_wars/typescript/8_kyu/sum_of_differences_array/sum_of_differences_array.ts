export function sumOfDifferences(arr: number[]): number {
  const orderedArr = arr.sort((a, b) => b - a);
  let result = 0;

  for (let i = 0; i < orderedArr.length - 1; i += 1) {
    const currentNumber = orderedArr[i];
    const nextNumber = orderedArr[i + 1];
    result += currentNumber - nextNumber;
  }

  return result;
}

// Would resolve to
// Math.max(...[1, 2, 10, 29]) - Math.min(...[1, 2, 10, 29]);

// console.log(sumOfDifferences([1, 2, 10]));
