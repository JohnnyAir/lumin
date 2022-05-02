import { productSlice } from "./ProductSlice";
import { AppThunk } from "../app/store";
import client from "../app/client";
import { ProductData, ProductVars } from "./types";
import { GET_PRODUCTS } from "./queries";

export const { loadProducts } = productSlice.actions;

export const fetchProducts =
  (currency: string): AppThunk =>
  (dispatch) => {
    client
      .query<ProductData, ProductVars>({
        query: GET_PRODUCTS,
        variables: { currency },
      })
      .then((result) => dispatch(loadProducts(result.data.products)));
  };
