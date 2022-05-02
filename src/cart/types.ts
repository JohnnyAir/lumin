import { IProduct } from "../products/types";

export interface ICart {
  [index: number]: { qty: number };
}

export interface ICartState {
  cart: ICart;
  open: boolean;
}

export interface ICartItem extends IProduct {
  qty: number;
}
