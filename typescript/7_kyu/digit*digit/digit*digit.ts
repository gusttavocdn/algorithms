export class Kata {
  static squareDigits(num: number): number {
    const singleDigits = num.toString().split('');
    const squaredDigits = singleDigits.map((digit) =>
      Math.pow(Number(digit), 2)
    );

    return Number(squaredDigits.join(''));
  }
}
