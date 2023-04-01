export function evaporator(
  content: number,
  evapPerDay: number,
  threshold: number
): number {
  let days = 0;
  let currentPercentage = 100;
  const evapPercentage = evapPerDay / 100;

  while (currentPercentage > threshold) {
    currentPercentage = currentPercentage - currentPercentage * evapPercentage;
    days++;
  }

  return days;
}

console.log(evaporator(10, 10, 5));
