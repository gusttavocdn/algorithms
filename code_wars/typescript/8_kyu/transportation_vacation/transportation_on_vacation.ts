export function rentalCarCost(days: number): number {
  const RENT_PRICE = 40;
  const totalWithoutDiscount = RENT_PRICE * days;

  if (days >= 3 && days < 7) return totalWithoutDiscount - 20;
  if (days >= 7) return totalWithoutDiscount - 50;
  return totalWithoutDiscount;
}
