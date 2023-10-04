/* eslint-disable @typescript-eslint/no-explicit-any */
import { OrderProps } from "../../interfaces";

export const selectProductsCount = (rootReducer: any) => {
  return rootReducer.CartReducer.products.reduce(
    (acc: number, curr: any) => acc + curr.amount,
    0
  );
};

export const selectProductTotalPrice = (rootReducer: any) => {
  const calculateTotal = rootReducer.CartReducer.products.reduce(
    (acc: number, curr: OrderProps) => {
      const price = curr.price.replace(",", ".");
      return acc + parseFloat(price) * curr.amount;
    },
    0
  );

  return calculateTotal.toFixed(2);
};
