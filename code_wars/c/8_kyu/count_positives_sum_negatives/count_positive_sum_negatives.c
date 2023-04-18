#include <stddef.h>

void count_positives_sum_negatives(int *values, size_t count, int *positivesCount, int *negativesSum)
{
	size_t i = 0;

	while (i < count)
	{
		if (values[i] > 0) *positivesCount+= 1;
		if (values[i] < 0) *negativesSum+= values[i];
		i++;
	}
}

void main(void)
{
	int posCount = 0;
	int negSum = 0;

	int values[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15 };

	count_positives_sum_negatives(values, sizeof(values)/sizeof(values[0]), &posCount, &negSum);
}
