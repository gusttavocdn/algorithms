export class Kata {
  static pinRegex = /^(\d{4}|\d{6})$/;

  static validatePin(pin: string): boolean {
    return this.pinRegex.test(pin);
  }
}
