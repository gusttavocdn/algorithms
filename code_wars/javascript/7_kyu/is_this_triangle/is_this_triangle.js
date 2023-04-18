function isTriangle(a,b,c)
{
  
  if (a + b <= c) return false;
  if (b + c <= a) return false;
  if (c + a <= b) return false;

  return true;
}

console.log(isTriangle(7, 2, 2))