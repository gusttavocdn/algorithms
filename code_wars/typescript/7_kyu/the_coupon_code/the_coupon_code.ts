export function checkCoupon(
  enteredCode: string,
  correctCode: string,
  currentDate: string,
  expirationDate: string
): boolean {
  const currentD = new Date(currentDate);
  const expirationD = new Date(expirationDate);

  if (expirationD.getTime() < currentD.getTime()) {
    return false;
  }

  return enteredCode === correctCode;
}

// console.log(
//   checkCoupon('123', '123', 'July 9, 2015', 'July 2, 2015') === false
// );
