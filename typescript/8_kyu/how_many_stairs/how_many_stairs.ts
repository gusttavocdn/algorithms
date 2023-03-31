export function stairsIn20(stairs: number[][]) {
  const flattedArr = stairs.flat();
  return flattedArr.reduce((acc, curr) => acc + curr, 0) * 20;
}

// console.log(
//   stairsIn20([
//     [1, 2],
//     [3, 4],
//     [5, 6],
//   ])
// );
