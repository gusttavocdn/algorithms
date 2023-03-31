export function between(a: number, b: number): number[] {
  if (a > b) throw new Error('a is greater than b');
  const arr: number[] = [];

  for (let i = a; i <= b; i++) {
    arr.push(i);
  }

  return arr;
}
