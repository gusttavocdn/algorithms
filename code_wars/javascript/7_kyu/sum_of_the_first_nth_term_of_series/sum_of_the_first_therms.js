function SeriesSum(n)
{
  let number = 1;
  let divisor = 4;

  if (n == 0) return (number - 1).toFixed(2);

  for (let i = 1; i < n; i+= 1){
    number += 1 / divisor;
    divisor+= 3;
  }
  
  return number.toFixed(2)

}

console.log(SeriesSum(2));