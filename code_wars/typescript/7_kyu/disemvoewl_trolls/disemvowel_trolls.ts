export class Kata {
  static disemvowel(str: string) {
    var vowels: string = 'AEIOUaeiou';
    return str
      .split('')
      .filter((v) => !vowels.includes(v))
      .join('');
  }
}
