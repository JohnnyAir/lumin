import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchCurrencies, setCurrency } from "./actions";

export const useCurrency = () =>
  useAppSelector((state) => state.currency.selectedCurrency);

export function useCurrencies() {
  const dispatch = useAppDispatch();
  const { selectedCurrency, currencies } = useAppSelector(
    (state) => state.currency
  );

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  return {
    currencies,
    selectedCurrency,
    setCurrency: (currency: string) => dispatch(setCurrency(currency)),
  };
}
