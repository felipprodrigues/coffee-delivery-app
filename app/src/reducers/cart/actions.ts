import { OrderProps } from "../../interfaces";

export enum ActionTypes {
  HANDLE_CART = "HANDLE_CART",
  REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART",
  CHECKOUT_INCREASE_ITEM_QUANTITY = "CHECKOUT_INCREASE_ITEM_QUANTITY",
  CHECKOUT_DECREASE_ITEM_QUANTITY = "CHECKOUT_DECREASE_ITEM_QUANTITY",
  EMPTY_CART = "EMPTY_CART",
}

export function decreaseAmountAction(item: OrderProps) {
  return {
    type: ActionTypes.CHECKOUT_DECREASE_ITEM_QUANTITY,
    payload: {
      clickedItem: item,
    },
  };
}

export function increaseAmountAction(item: OrderProps) {
  return {
    type: ActionTypes.CHECKOUT_INCREASE_ITEM_QUANTITY,
    payload: {
      clickedItem: item,
    },
  };
}

export function handleCartAction(draft: object[]) {
  return {
    type: ActionTypes.HANDLE_CART,
    payload: {
      draft,
    },
  };
}

export function removeItemFromCartAction(item: object[]) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      item,
    },
  };
}
