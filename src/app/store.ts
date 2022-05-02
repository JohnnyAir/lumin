import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import productReducer from "../products/ProductSlice";
import cartReducer from "../cart/CartSlice";
import currencyReducer from "../currency/currencySlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    currency: currencyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
