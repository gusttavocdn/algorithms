interface String {
  // Declaration needed, don't remove it
  toJadenCase(): string;
}

String.prototype.toJadenCase = function () {
  let newString = '';

  newString += this[0].toUpperCase();
  for (let i = 1; i < this.length; i++) {
    const previousChar = this[i - 1];
    const currentChar = this[i];

    if (previousChar === ' ' && currentChar !== ' ')
      newString += currentChar.toUpperCase();
    else newString += currentChar.toLowerCase();
  }

  return newString;
};
