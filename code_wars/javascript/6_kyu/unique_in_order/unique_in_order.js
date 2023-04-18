function uniqueInOrder(iterable) {
  let newArr = [];
  let index = 0;
  
  while (index < iterable.length){
    if (iterable[index] != iterable[index + 1]) newArr.push(iterable[index])
    index++;
  }

  if (newArr[newArr.length - 1] != iterable[iterable.length - 1]) newArr.push(iterable[iterable.length - 1])

  return newArr;
}

// var uniqueInOrder=function(iterable){
//   return [...iterable].filter((a, i) => a !== iterable[i-1])
// }

// var uniqueInOrder=function(iterable){
//   iterable = typeof iterable === 'string' ? iterable.split('') : iterable;
//   return iterable.filter(function(e, i, arr) {
//     return e !== arr[i-1];
//   });
// }

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD'));
console.log(uniqueInOrder([1, 2, 2, 3, 3]))