export function cockroachSpeed(speedInKmPerHour: number): number {
  const secondsInHour = 60 * 60;
  const speedInCmPerHour = speedInKmPerHour * 100000;
  const speedInCmPerSecond = speedInCmPerHour / secondsInHour;
  return Math.floor(speedInCmPerSecond);
}

console.log(cockroachSpeed(1.08));
