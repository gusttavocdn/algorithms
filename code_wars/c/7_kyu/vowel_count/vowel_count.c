#include <stddef.h>
#include <stdio.h>
#include <string.h>

size_t get_count(const char *s)
{
    char vowels[6] = {'a', 'e', 'i', 'o', 'u'};
    int word_size = strlen(s);
    int vowelsCount = 0;

    for (int i = 0; i < 5; i++)
    {
      for (int j = 0; j < word_size; j++)
      {
        if (vowels[i] == s[j])
          vowelsCount++;
      }
    }
    
    return (vowelsCount);
}

int main()
{
  char string[] = "aeiou";

  printf("%ld", get_count(string));

  return (0);
}