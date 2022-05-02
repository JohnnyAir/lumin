import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartState } from "./types";

const initialState: ICartState = {
  cart: {},
  open: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadCart: (state) => {},
    addToCart: (state, action: PayloadAction<number>) => {
      const item = state.cart[action.payload];
      if (item) {
        item.qty += 1;
      } else {
        state.cart[action.payload] = { qty: 1 };
      }
      state.open = true;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const item = state.cart[action.payload];
      if (item) {
        delete state.cart[action.payload];
      }
    },
    increaseItemQuantiy: (state, action: PayloadAction<number>) => {
      const item = state.cart[action.payload];
      if (item) {
        item.qty += 1;
      }
    },
    decreaseItemQuantiy: (state, action: PayloadAction<number>) => {
      const item = state.cart[action.payload];
      if (item && item.qty > 1) {
        item.qty -= 1;
      }
    },
    openCart: (state) => {
      state.open = true;
    },
    closeCart: (state) => {
      state.open = false;
    },
  },
});

export default cartSlice.reducer;
