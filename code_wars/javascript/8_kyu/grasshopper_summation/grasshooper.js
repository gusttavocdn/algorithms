function sumattion(num)
{
  let sum = 0;
  while (num)
  {
    sum+= num;
    num--;
  }

  return sum;
}

console.log(sumattion(8));