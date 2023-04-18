#include <sys/types.h>
#include <string.h>

ssize_t find_short(const char *s)
{
    ssize_t i = 0, j = 0, l = 0;

	while(s[i++] != ' ')
		l++;
	i = 0;
	while (s[i] != '\0')
	{
		j = 0;
		while (s[i++] != ' ' && s[i] != '\0')
			j++;
		if (s[i] == '\0') j++;
		if (j < l) l = j;
	}

	return (l);
}

void main(void)
{
	const char s[] = "bitcoin take over the world maybe who knows perhaps";
	ssize_t t = find_short(s);
}
