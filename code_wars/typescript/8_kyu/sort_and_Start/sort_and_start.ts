export function twoSort(stringArray: string[]): string {
  const sortedArray = stringArray.sort();
  const firstWord = sortedArray[0];

  return firstWord.split('').join('***');
}

// console.log(
//   twoSort([
//     'bitcoin',
//     'take',
//     'over',
//     'the',
//     "Zdsa"
//     'world',
//     'maybe',
//     'who',
//     'knows',
//     'perhaps',
//   ])
// );
