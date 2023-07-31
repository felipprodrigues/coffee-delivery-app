/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "react-toastify";

import { ActionTypes } from "./actions";

export function CartReducer(state: any, action: any): any {
  switch (action.type) {
    case ActionTypes.HANDLE_CART: {
      const draft = action.payload.draft;

      if (draft?.amount === 0) {
        toast.warning("Adicione ao menos um item ao carrinho");
      }

      if (
        state.includes(draft) ||
        state.some((order: any) => order.id === draft.id)
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

      const draft = state.filter((order: any) => order.id !== clickedItem.id);

      return draft;
    }
    case ActionTypes.CHECKOUT_INCREASE_ITEM_QUANTITY: {
      const clickedItem = action.payload.clickedItem;

      const updatedState = state.map((prevState: any) => {
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

      const updatedState = state.map((prevState: any) => {
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
