#include <stddef.h>
#include <stdio.h>

int sum_array(const int *values, size_t count)
{
  int result = 0;

  for (int i = 0; i < count; i++)
  {
    result+= values[i];
  }

  return (result) ;
}


void main()
{
  int values[5] = {1, 2, 3, 4, 5};
  size_t length = sizeof(values) / sizeof(values[0]);

  printf("%d", sum_array(values, length));
}