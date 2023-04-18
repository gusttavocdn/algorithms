function reverseWords(str) {
  const wrongReverse = str.split('').reverse().join('');

  return wrongReverse.split(' ').reverse().join(' ');
}

console.log(reverseWords("Gustavo da Silva"));