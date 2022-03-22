function getMiddle(s) {

  let stringMidle = s.length / 2;

  return s.length % 2 == 0 ?
    s.slice(stringMidle - 1, stringMidle + 1)
    : s.slice(stringMidle, stringMidle + 1)
}

console.log(getMiddle(""));
