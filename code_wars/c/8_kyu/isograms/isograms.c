#include <stdbool.h>
#include <string.h>
#include <stdio.h>

char to_lower(char c)
{
  if (c >= 'A' && c <= 'Z') c = c + 32;
  return c;
}

bool IsIsogram (const char *string) 
{
  int i, j;
  int letterCount;
  int length = strlen(string);

  i = 0;
  while (i < length)
  {
    char c = string[i];
    letterCount = 0;
    j = 0;
    while (j < length)
    {
      if (to_lower(c) == to_lower(string[j])) letterCount++;
      if (letterCount > 1) return false;
      j++;
    }
    i++;
  }

  return true;
}

int main()
{
  char string[] = "Ggustavo";
  
  printf("%d", IsIsogram(string));

  return (0) ;
}