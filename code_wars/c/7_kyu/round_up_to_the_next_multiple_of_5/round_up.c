#include <stdio.h>

int round_to_next5(int n);

int main(void)
{
	printf("%i", round_to_next5(-10));
	return 0;
}

int round_to_next5(int n)
{
	while (n % 5 != 0)
		n++;
	return (n);
}
