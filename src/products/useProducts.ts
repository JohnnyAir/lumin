import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useCurrency } from "../currency/hooks";
import { fetchProducts } from "./actions";

export default function useProducts() {
  const dispatch = useAppDispatch();
  const currency = useCurrency();
  const { loading, products } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts(currency));
  }, [dispatch, currency]);

  return {
    currency,
    products,
    isFetchingProducts: loading,
  };
}
