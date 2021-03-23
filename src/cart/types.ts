import { Product } from "../products/types";

export interface Cart {
  [index: number]: { qty: number };
}

export interface CartState {
  cart: Cart;
  open: boolean;
}

export interface CartItemType extends Product {
  qty: number;
}
