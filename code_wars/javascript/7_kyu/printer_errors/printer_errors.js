function printerError(s) {
  let errorRate = 0;
  
  s.split('').forEach((letter) => {
    if (letter > 'm') errorRate++;
  });

  return `${errorRate}/${s.length}`
}

console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'));