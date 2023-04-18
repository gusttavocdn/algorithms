export function sumDigits(n: number): number {
  const digits = n
    .toString()
    .split('')
    .filter((char) => char !== '-');

  return digits.reduce((acc, digit) => acc + Number(digit), 0);
}

console.log(sumDigits(+53));
