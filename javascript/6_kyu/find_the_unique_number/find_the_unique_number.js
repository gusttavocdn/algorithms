function findUniq(arr) {
  let mostRepeteadN = 0; 
  
  arr.forEach((number, i, array) => {
    if (number == array[i + 1]) {
      mostRepeteadN = number;
      return ;
    } 
  });

  const diferrentN = arr.find((number) => number != mostRepeteadN);

  return diferrentN;
}

console.log(findUniq([ 1, 2, 1, 1, 1 ]))