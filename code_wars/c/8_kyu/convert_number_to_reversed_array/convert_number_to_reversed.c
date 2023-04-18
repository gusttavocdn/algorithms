#include <stdio.h>
#include <stddef.h>
#include <inttypes.h>

void digitize(uint64_t n, uint8_t digits[], size_t *length_out)
{

	*length_out = 0;
	if (n == 0)
	{
		digits[0] = 0;
		*length_out = 1;
		return ;
	}

	while (n)
	{
		digits[*length_out] = n % 10;
		n /= 10;
		*length_out += 1;
	}
}

void main(void)
{
	uint64_t number = 23582357;
	uint8_t *letters;
	size_t length;

	digitize(number, letters, &length);
	printf("%d", *letters);
}
