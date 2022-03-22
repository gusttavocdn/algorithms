function multiplicationTable(size) {
  const arr = new Array(size);
  console.log(arr);
  for (let i = 0; i < size; i += 1) {
    const arr2 = new Array(size);
    for (let j = 0; j < size; j += 1) {
      arr2[j] = (j + 1) * (i + 1);
    }

    arr[i] = arr2;
  }

  return arr;
}

console.log(multiplicationTable(3));
