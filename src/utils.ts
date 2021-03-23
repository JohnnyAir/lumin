export const formatCurrency = (currency: string, amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  }).format(amount);
};
