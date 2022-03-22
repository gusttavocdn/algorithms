#include <stddef.h>
#include <stdio.h>
#include <stdio.h>

int bus_terminus (size_t nb_stops, const short bus_stops[nb_stops][2])
{
  int bus = 0;
  int i = 0;

  while (i < nb_stops)
  {
      bus += bus_stops[i][0];
      bus -= bus_stops[i][1];
      i++;
  } 
  
  
  return bus;
}


int main()
{
  const short int stops[3][2] = {{10, 0}, {3, 5}, {5, 8}};

  printf("%d", bus_terminus(3, stops));
  
  return (0);
}