export interface IProduct {
  id: number;
  title: string;
  image_url: string;
  price: number;
  formattedPrice?: string;
}

export interface ProductData {
  products: IProduct[];
}

export interface ProductVars {
  currency: string;
}

export interface ProductState {
  loading: boolean;
  products: IProduct[];
}
