import { useAppSelector } from "../app/hooks";
import { Product } from "../products/types";
import { Cart } from "./types";

const mapCartItemToProduct = (products: Product[], cart: Cart) => {
  return products
    .filter((product) => cart[product.id])
    .map((product) => ({ ...product, ...cart[product.id] }));
};

const calculateCartTotal = (cartItems: { qty: number; price: number }[]) => {
  return cartItems.reduce((sum, item) => sum + item.qty * item.price, 0);
};

export const useCartValues = () => {
  const state = useAppSelector((state) => state);

  const cartItems = mapCartItemToProduct(
    state.product.products,
    state.cart.cart
  );

  return {
    ...state.cart,
    cartItems,
    cartItemsCount: cartItems.length,
    subTotal: calculateCartTotal(cartItems),
  };
};
