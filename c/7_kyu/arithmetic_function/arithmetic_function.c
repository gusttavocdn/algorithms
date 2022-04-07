#include <stdio.h>
#include <string.h>

double arithmetic(double a, double b, const char *operator)
{

	switch(operator[0])
	{
		case 'a':
			return (a + b);
		case 's':
			return (a - b);
		case 'm':
			return (a * b);
		case 'd':
			return (a / b);
		default:
			return (0);
	}
}
