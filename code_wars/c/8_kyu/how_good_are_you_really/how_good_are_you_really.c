int better_than_average(int class_points[], int class_size, int your_points) {
	int t = 0, i = 0;
	int m = 0;

	while (i < class_size)
	{
		t += class_points[i];
		i++;
	}

	t+= your_points;
	m = t / (class_size + 1);
	return (m);
}

void main(void)
{
	int points[] = {1, 2, 3, 4, 5 , 6 };
	int size = sizeof(points) / sizeof(points[0]);
	int your_points = 10;

	better_than_average(points, size, your_points);
}
