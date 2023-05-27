export type Product = {
  id: number;
  name: string;
  price: number;
  url: string;
  description: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
}

export type CheckoutForm = {
  fullname: string;
  address: string;
  creditCard: string;
  total: number;
}
