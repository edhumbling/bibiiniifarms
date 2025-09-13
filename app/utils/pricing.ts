export const EGGS_PER_CRATE = 30;
export const PRICE_PER_CRATE_GHS = 55;
export const DELIVERY_PER_CRATE_GHS = 1.5;

export function computeTotals(qtyCrates: number) {
  const subtotal = qtyCrates * PRICE_PER_CRATE_GHS;
  const delivery = qtyCrates * DELIVERY_PER_CRATE_GHS;
  const total = subtotal + delivery;
  return { subtotal, delivery, total };
}

export function formatGhs(amount: number) {
  return `GH₵ ${amount.toFixed(2)}`;
}


