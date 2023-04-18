export function rowWeights(arr: number[]) {
  let teamOneWeigth = 0;
  let teamTwoWeigth = 0;

  arr.forEach((personWeight, i) => {
    if (i % 2 === 0) teamOneWeigth += personWeight;
    else teamTwoWeigth += personWeight;
  });

  return [teamOneWeigth, teamTwoWeigth];
}

// console.log(rowWeights([1, 2, 3, 4, 5, 6, 7]));
