import { OrderProps } from "../interfaces";

interface ParamProps {
  product: OrderProps;
  productId?: string;
}

export function increaseItemAmount(product) {
  console.log(product.amount);

  return {
    ...product,
    amount: product.amount + 1,
  };
}
