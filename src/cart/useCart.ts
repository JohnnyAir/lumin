import { useAppSelector } from "../app/hooks";
import { IProduct } from "../products/types";
import { useCartActions } from "./actions";
import { ICart } from "./types";

const mapCartItemToProduct = (products: IProduct[], cart: ICart) => {
  return products
    .filter((product) => cart[product.id])
    .map((product) => ({ ...product, ...cart[product.id] }));
};

const calculateCartTotal = (cartItems: { qty: number; price: number }[]) => {
  return cartItems.reduce((sum, item) => sum + item.qty * item.price, 0);
};

export const useCart = () => {
  const state = useAppSelector((state) => state);
  const actions = useCartActions();

  const cartItems = mapCartItemToProduct(
    state.product.products,
    state.cart.cart
  );

  return {
    ...actions,
    ...state.cart,
    cartItems,
    cartItemsCount: cartItems.length,
    subTotal: calculateCartTotal(cartItems),
  };
};
