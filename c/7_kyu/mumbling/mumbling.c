#include <stdio.h>
#include <ctype.h>
#include <string.h>
#include <stdlib.h>

static	int	verify_string_letters(const char *source)
{
	while (*source)
	{
		if (!isalpha(*source))
			return (0);
		source++;
	}

	return (1);
}

static size_t	calc_buffer_size(size_t size)
{
	size_t res = 0;

	while (size)
		res += size--;
	return (res);
}

static	void	capitalize_buffer(char *buffer)
{
	size_t i;

	i = 0;
	while (buffer[i])
	{
		if (i == 0)
			buffer[i] = buffer[i] - 32;
		if (buffer[i] == '-')
			buffer[i + 1] = buffer[i + 1] - 32;
		i++;
	}
}

char *accum(const char *source)
{
	int is_valid;
	size_t	hiffen_count;
	size_t	buff_len;
	size_t	i;
	size_t	track_source;
	size_t	j;
	char	*buffer;

	is_valid = verify_string_letters(source);
	if (!is_valid)
		return (calloc(1, 1));

	hiffen_count = strlen(source) - 1;
	buff_len = calc_buffer_size(strlen(source)) + hiffen_count;

	buffer = calloc(buff_len, sizeof(char));
	if (!buffer)
		return (NULL);

	i = 0;
	track_source = 0;
	while (source[track_source])
	{
		j = track_source + 1;
		while (j--)
			buffer[i++] = tolower(source[track_source]);
		buffer[i++] = '-';
		track_source++;
	}

	buffer[--i] = '\0';
	capitalize_buffer(buffer);
	return ((char *)buffer);
}


int	main()
{
	char *s = accum("1dada1");

	printf("%s\n", s);
	return (0);
}

