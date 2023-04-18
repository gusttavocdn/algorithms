#include <stddef.h>
#include <string.h>
#include <stdlib.h>


char *find_needle(const char **haystack, size_t count)
{
  int i = 0;
  char *buffer = calloc(31, sizeof(char));
  char *tmp = malloc(1);

  strcpy(buffer, "found the needle at position ");
  while (i < count)
  {
    if (strcmp(haystack[i], "needle") == 0) break;
    i++;
  }
  sprintf(tmp, "%d", i);
  strcat(buffer, tmp);
  return buffer;
}