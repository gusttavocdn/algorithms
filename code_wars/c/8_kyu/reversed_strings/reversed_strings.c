#include <stdio.h>


char *strrev (char *string)
{
  
  int i;
  char temp;
  int word_length;

  i = 0;
  word_length = 0;
  while (string[i++] != '\0')
    word_length++;


  i = 0;
  while (i < word_length)
  {
    temp = string[i];
    string[i] = string[word_length - 1];
    string[word_length - 1] = temp;
    word_length-- && i++;
  }

  
  return string; // reverse the string in place and return it
}

int main()
{
  char string[] = "Marcos";

  strrev(string);
  printf("%s", string);
  return (0) ;
}