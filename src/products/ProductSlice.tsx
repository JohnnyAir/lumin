import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductState } from "./types";

const initialState: ProductState = {
  currency: "USD",
  loading: true,
  products: [],
  currencies: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.loading = false;
    },
    loadCurrencies: (state, action: PayloadAction<string[]>) => {
      state.currencies = action.payload;
    },
    setCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
  },
});

export default productSlice.reducer;
