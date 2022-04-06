#include <stdio.h>

int findSum(int n)
{

	size_t i;
	int sum;

	i = 0;
	sum = 0;
	while (i <= n)
	{
		if (i % 3 == 0 || i % 5 == 0)
			sum += i;
		i++;
	}

	return (sum);
}

int main()
{

	printf("%d", findSum(5));
}
