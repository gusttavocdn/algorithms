#include <stdio.h>

int past(int h, int m, int s)
{
  int hour_in_miliseconds = 0;
  int s_m;
  int m_m;
  int h_m;

  s_m = s * 1000;
  m_m = m * 60 * 1000;
  h_m = h * 60 * 60 * 1000;

  hour_in_miliseconds = s_m + m_m + h_m;
  
  return (hour_in_miliseconds);
}

void main()
{

  printf("%d", past(1, 0, 0));
}