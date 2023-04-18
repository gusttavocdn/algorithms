#include <stdio.h>
#include <string.h>

char* remove_char(char* dst, const char* src)
{

    int l = strlen(src);
    int i = 0;

    while (i < l)
    {
      dst[i] = src[i + 1];
      i++;
    }
      
    dst[l - 2] = '\0';
    return (dst);
}

int main() {
  char dest[100];

  remove_char(dest, "He");

  printf("%s", dest);

  return (0);
}