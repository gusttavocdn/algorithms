function findNb(m) {
  let base = 0;
  let result = 0;

  for(let n = 0; result < m ; n+= 1) {
    base+= 1;
    result+= Math.pow(base, 3)
  }

  return result == m ? base : -1;
}

console.log(findNb(100))
console.log(findNb(4183059834009))
console.log(findNb(135440716410000))
