import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, ProductState } from "./types";

const initialState: ProductState = {
  loading: true,
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
      state.loading = false;
    },
  },
});

export default productSlice.reducer;
