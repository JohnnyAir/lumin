import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICurrencyState } from "./types";

const initialState: ICurrencyState = {
  selectedCurrency: "USD",
  loading: true,
  currencies: [],
};

export const currencySlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadCurrencies: (state, action: PayloadAction<string[]>) => {
      state.currencies = action.payload;
    },
    setCurrency: (state, action: PayloadAction<string>) => {
      state.selectedCurrency = action.payload;
    },
  },
});

export default currencySlice.reducer;
