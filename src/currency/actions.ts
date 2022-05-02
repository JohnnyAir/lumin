import client from "../app/client";
import { AppThunk } from "../app/store";
import { currencySlice } from "./currencySlice";
import { GET_CURRENCIES } from "./queries";

export const { loadCurrencies, setCurrency } = currencySlice.actions;

export const fetchCurrencies = (): AppThunk => (dispatch) => {
  client
    .query<{ currency: string[] }, null>({
      query: GET_CURRENCIES,
    })
    .then((result) => dispatch(loadCurrencies(result.data.currency)));
};
