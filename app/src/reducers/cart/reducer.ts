import { toast } from "react-toastify";

import { OrderProps } from "../../App";
import { ActionTypes } from "./actions";

export function CartReducer(state: OrderProps[], action: any) {
  switch (action.type) {
    case ActionTypes.HANDLE_CART: {
      const draft = action.payload.draft;

      if (draft?.amount === 0) {
        toast.warning("Adicione ao menos um item ao carrinho");
        return;
      }

      if (
        state.includes(draft) ||
        state.some((order) => order.id === draft.id)
      ) {
        toast.warning(
          "Produto já adicionado. Vá até a página de checkout para alterar a quantidade"
        );
        return state;
      } else {
        toast.success("Produto adicionado ao carrinho!");
        return [...state, draft];
      }
    }
    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      const clickedItem = action.payload.item;

      const draft = state.filter((order) => order.id !== clickedItem.id);

      return draft;
    }
    case ActionTypes.CHECKOUT_INCREASE_ITEM_QUANTITY: {
      const clickedItem = action.payload.clickedItem;

      const updatedState = state.map((prevState) => {
        if (prevState.id === clickedItem.id) {
          return { ...prevState, amount: clickedItem.amount + 1 };
        } else {
          return prevState;
        }
      });

      return updatedState;
    }
    case ActionTypes.CHECKOUT_DECREASE_ITEM_QUANTITY: {
      const clickedItem = action.payload.clickedItem;

      const updatedState = state.map((prevState) => {
        if (prevState.id === clickedItem.id && prevState.amount > 1) {
          return { ...prevState, amount: clickedItem.amount - 1 };
        } else {
          return prevState;
        }
      });

      return updatedState;
    }

    default:
      return state;
  }
}
