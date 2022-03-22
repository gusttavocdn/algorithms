function deleteNth(arr, n) {
  for (let i = 0; i < arr.length; i += 1) {
    const numberToVerify = arr[i];
    let repeat = 0;
    for (let j = 0; j < arr.length; j += 1) {
      if (numberToVerify == arr[j]) {
        repeat++;
        if (repeat > n) 
        {
          arr.splice(j, 1);
          j--;
        }
      }
    }
  }

  return arr;
}

console.log(deleteNth([36, 34, 12, 49, 12, 46], 1));

// function deleteNth(arr, n) {
//   let cache = {};

//   return arr.filter((element) => {
//     console.log(element)
//     cache[element] = (cache[element] || 0) + 1;
//     console.log(cache);
//     return cache[element] <= n;
//   });
// }

// --- Explanation of this Function ---- //

// 1 - return arr.filter is what brings the result, and filter creates a new array based on the function you enter into it. It runs the function on each element, and if it's true, it keeps that element, if false it does not.

// 2 - So cache[n] = (cache[n]) || 0 is the part where it stores the array element as a key in object cache. Initially, cache[n] will be undefined, so then it defaults to 0 because the code specifies cache[n] = (cache[n] || 0) + 1, in other words, everytime the function comes across a new number in the array, it will assign a key/value pair in cache as { arr[n]: 1}.

// 3 - Then the function(n) returns a boolean based on whether cache[n] <= x, if that evaluates to true, the filter function will add that element to the returned array, or if false it will ignore the element and proceed to the next one