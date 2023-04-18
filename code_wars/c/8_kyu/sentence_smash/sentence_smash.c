#include <stdlib.h>
#include <string.h>
#include <stdio.h>

char *smash (const char *const words[], size_t nb_words)
{
	size_t total_len = 0;
	size_t i = 0;
	size_t j = 0;
	size_t n = 0;
	size_t spaces = nb_words - 1;
	char *new_string;

	while (i < nb_words)
		total_len += strlen(words[i++]);

	new_string = calloc(((total_len + spaces) + 1), sizeof(char));
	i = 0;
	while (i < nb_words)
	{
		j = 0;
		while (j < strlen(words[i]))
			new_string[n++] = words[i][j++];
		if (i < nb_words - 1)
			new_string[n++] = ' ';
		i++;
	}
	new_string[n] = '\0';
	return (new_string);
}

void main(void)
{
	const char *hello[] = {"Hello", "world", "this", "is", "great"};
	size_t i = sizeof(hello) / sizeof(hello[0]);
	char *newString;

	newString = smash(hello, i);
	printf("%s", newString);

}
