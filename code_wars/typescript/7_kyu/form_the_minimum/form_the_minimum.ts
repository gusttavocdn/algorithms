export const minValue = (values: number[]): number => {
  const uniqueDigits = [...new Set(values)].sort();
  return Number(uniqueDigits.join(''));
};

// console.log(minValue([9, 3, 4, 1, 2, 3, 3, 3, 3]));
