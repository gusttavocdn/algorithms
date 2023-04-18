#include <stdio.h>

int string_to_number(const char *src) {
	int res;
	int signal;

	if (*src == '-')
	{
		signal = -1;
		src++;
	}
	else
		signal = 1;
	res = 0;
	while (*src)
		res = 10 * res + (*src++ - '0');

	return (res * signal);
}


int main()
{
	printf("%d", string_to_number("-480"));
	return (0);
}
