#include <stdio.h>
#include <stdlib.h>

size_t ft_find_size(int n)
{
	size_t i;

	i = 2;
	if (n < 0)
	{
		n = n * -1;
		i++;
	}

	while (n / 10)
	{
		n = n / 10;
		i++;
	}
	return (i);
}

char *ft_itoa(int n)
{
	char *str;
	size_t size;
	size_t i;

	size = ft_find_size(n);
	str = (char *)calloc(size, sizeof(char));
	if (!str)
		return (NULL);
	i = size - 1;
	if (n > -1)
	{
		while (i--)
		{
			str[i] = n % 10 + '0';
			n = n / 10;
		}
	}
	else
	{
		n = n * -1;
		str[0] = '-';
		while (i-- > 1)
		{
			str[i] = n % 10 + '0';
			n = n / 10;
		}
	}
	str[size - 1] = '\0';
	return (str);
}

int main(void)
{
	const char *nb;

	nb = number_to_string(-123);

	printf("%s", nb);
	return (0);
}
