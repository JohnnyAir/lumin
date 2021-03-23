export interface Product {
  id: number;
  title: string;
  image_url: string;
  price: number;
  formattedPrice?:string;
}

export interface ProductData {
  products: Product[];
}

export interface ProductVars {
  currency: string;
}

export interface ProductState {
  currency: string;
  loading: boolean;
  products: Product[];
  currencies: string[];
}

export interface ProductProps extends Product {
  addToCart: (id: number) => void;
}
