import { CardProps } from "../../interfaces";
import { increaseItemAmount } from "../../utils/increaseItemAmount";
import { CartActionTypes } from "./action-types";

export const addProductToCart = (payload: CardProps) => ({
  type: CartActionTypes.ADD_PRODUCT,
  payload,
});

export const removeProductFromCart = (payload: CardProps) => ({
  type: CartActionTypes.REMOVE_PRODUCT_FROM_CART,
  payload,
});

export const increaseProductQuantity = (payload, productId) => {
  // Use the increaseItemAmount utility function to update the product quantity
  const updatedProducts = increaseItemAmount(payload, productId);

  return {
    type: CartActionTypes.INCREASE_PRODUCT_QUANTITY,
    payload: updatedProducts, // Pass the updated products to the action
  };
};
