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

export const increaseProductQuantity = (payload: CardProps) => ({
  type: CartActionTypes.INCREASE_PRODUCT_QUANTITY,
  payload,
});

export const decreaseProductQuantity = (payload: CardProps) => ({
  type: CartActionTypes.DECREASE_PRODUCT_QUANTITY,
  payload,
});
