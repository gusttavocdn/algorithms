export function longestConsec(strArr: string[], k: number): string {
  if (strArr.length == 0 || k > strArr.length || k <= 0) return '';

  const substrs: string[] = [];

  for (let i = 0; i + k <= strArr.length; i += 1) {
    const substr = strArr.slice(i, k + i).join('');
    substrs.push(substr);
  }

  const largetString = substrs.reduce((final, curr) => {
    if (final.length == curr.length) return final;
    return final.length > curr.length ? final : curr;
  });

  return largetString;
}
