import { productSlice } from "./ProductSlice";
import { AppThunk } from "../app/store";
import client from "../app/client";
import { ProductData, ProductVars } from "./types";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { GET_PRODUCTS, GET_CURRENCIES } from "./queries";

export const { loadProducts, loadCurrencies ,setCurrency } = productSlice.actions;

export const fetchProducts = (currency: string): AppThunk => (dispatch) => {
  client
    .query<ProductData, ProductVars>({
      query: GET_PRODUCTS,
      variables: { currency },
    })
    .then((result) => dispatch(loadProducts(result.data.products)));
};

export const fetchCurrencies = (): AppThunk => (dispatch) => {
  client
    .query<{currency:string[]}, null>({
      query: GET_CURRENCIES
    })
    .then((result) => dispatch(loadCurrencies(result.data.currency)));
};

export function useProductActions() {
  const dispatch = useAppDispatch();
  const currency = useAppSelector((state) => state.product.currency);

  return {
    fetchProducts: () => dispatch(fetchProducts(currency)),
    fetchCurrencies:() => dispatch(fetchCurrencies()),
  };
}

export function useCurrency() {
  const dispatch = useAppDispatch();
  const currency = useAppSelector((state) => state.product.currency);
  const currencies = useAppSelector((state) => state.product.currencies);

  return {
    currency,
    currencies,
    setCurrency: (currency: string) => {
      dispatch(setCurrency(currency));
      dispatch(fetchProducts(currency));
    },
  };
}
