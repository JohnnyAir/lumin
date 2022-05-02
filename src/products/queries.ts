import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetAllProducts($currency: Currency) {
    products {
      id
      title
      image_url
      price(currency: $currency)
    }
  }
`;
