#include <stddef.h>
#include <stdio.h>

int square_sum(const int *values, size_t count)
{
  int i;
  int result;

  i = 0;
  result = 0;
  while (i < count)
  {
    result+= values[i] * values[i];
    i++;
  }

  return (result) ;
}


int main()
{
  int values[5] = {1, 2, 3, 4, 5};
  size_t length = sizeof(values) / sizeof(*values);

  printf("%d", square_sum(values, length));
  
  return (0) ;
}