#include <stddef.h>

void copy_array(int dest[], const int src[], int start, int end)
{
	int i;

	i = 0;
	while (start < end)
		dest[i++] = src[start++];
}


void merge(int list[], int start, int middle, int end)
{
	int i;
	int top_left;
	int top_right;
	int left_list[middle - start];
	int right_list[end - middle];

	copy_array(left_list, list, start, middle);
	copy_array(right_list, list, middle, end);

	i = start;
	top_left = 0;
	top_right = 0;
	while (i < end)
	{
		if (top_left >= (middle - start))
			list[i] = right_list[top_right++];
		else if (top_right >= (end - middle))
			list[i] = left_list[top_left++];
		else if (left_list[top_left] < right_list[top_right])
			list[i] = left_list[top_left++];
		else
			list[i] = right_list[top_right++];
		i++;
	}
}

void merge_sort(int start, int end, int array[end])
{
	int middle;
	if ((end - start) > 1)
	{
		middle = start + (end - start) / 2;
		merge_sort(start, middle, array);
		merge_sort(middle, end, array);
		merge(array, start, middle, end);
	}

}


void sort_ascending(size_t length, int array[length])
{
	merge_sort(0, (int) length, array);
}

