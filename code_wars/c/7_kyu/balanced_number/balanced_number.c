#include "stdio.h"
#include "string.h"
#include "stdlib.h"

const	char	*balancedNum(unsigned long long int number)
{
	int odd_or_even;
	unsigned long long int n_array[20];
	unsigned long long int first_part;
	unsigned long long int second_part;
	int middle[2];
	size_t i;
	size_t c;

	i = 0;
	while (number)
	{
		n_array[i] = number % 10;
		number = number / 10;
		i++;
	}

	odd_or_even = ((i % 2) == 0); // 0 is even (par)
	c = 0;
	first_part = 0;
	second_part = 0;
	if (odd_or_even == 0)
		middle[0] = ((i + 1) / 2) - 1;
	else
	{
		middle[0] = (i / 2) - 1;
		middle[1] = middle[0] + 1;
	}

	while (c < (size_t)middle[0])
		first_part += n_array[c++];
	if (odd_or_even == 0)
		while (--i > (size_t)middle[0])
			second_part += n_array[i];
	else
		while (--i > (size_t)middle[1])
			second_part += n_array[i];

	if (first_part == second_part)
		return ("Balanced");
	return ("Not Balanced");
}

void main(void)
{
	int n = 424;

	printf("%s", balancedNum(n));
}
