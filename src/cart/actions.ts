import { useAppDispatch } from "../app/hooks";
import { cartSlice } from "./CartSlice";

export const {
  loadCart,
  increaseItemQuantiy,
  decreaseItemQuantiy,
  addToCart,
  removeFromCart,
  openCart,
  closeCart,
} = cartSlice.actions;

export function useCartActions() {
  const dispatch = useAppDispatch();

  return {
    loadCart: () => dispatch(loadCart()),
    increaseItemQuantiy: (id: number) => dispatch(increaseItemQuantiy(id)),
    decreaseItemQuantiy: (id: number) => dispatch(decreaseItemQuantiy(id)),
    addToCart: (id: number) => dispatch(addToCart(id)),
    removeFromCart: (id: number) => dispatch(removeFromCart(id)),
    openCart: () => dispatch(openCart()),
    closeCart: () => dispatch(closeCart()),
  };
}
