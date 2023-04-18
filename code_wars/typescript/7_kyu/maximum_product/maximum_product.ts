export function adjacentElementsProduct(arr: number[]): number {
  let max = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length - 1; i++) {
    const current = arr[i];
    const next = arr[i + 1];

    if (current * next > max) {
      max = current * next;
    }
  }

  return max;
}

// console.log(adjacentElementsProduct([1, 2, 3]));
