function abbreviate(string) {
  return string.replace(/[a-z]+/gi, replaceWord);
}

function replaceWord(word) {
  let { length } = word; // Esse tipo de instrução é possivel, pois string tambem são objetos
  console.log(word);
  return length < 4 ? word : `${word[0]}${(length - 2)}${word[length - 1]}`;
}

console.log(abbreviate("elephant-rides are really fun!"));