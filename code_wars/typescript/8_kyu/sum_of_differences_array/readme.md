# Sum of differences in array

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

Link: https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/typescriptc
