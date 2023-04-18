export const longest = (s1: string, s2: string): string => {
  const concatenatedStringsArray = s1.concat(s2).split('');
  const strArrWithouDuplicates = [...new Set(concatenatedStringsArray)];
  const strArrSorted = strArrWithouDuplicates.sort((a, b) =>
    a.localeCompare(b)
  );

  return strArrSorted.join('');
};

console.log(longest('Gustavo', 'Larissa'));
