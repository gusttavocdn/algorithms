export function dutyFree(
  normPrice: number,
  discount: number,
  hol: number
): number {
  const priceWithDiscount = normPrice - normPrice * (discount / 100);
  const savedMoney = normPrice - priceWithDiscount;

  return Math.floor(hol / savedMoney);
}

console.log(dutyFree(1400, 35, 10000));
