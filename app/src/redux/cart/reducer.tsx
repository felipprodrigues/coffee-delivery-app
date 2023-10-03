/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { toast } from "react-toastify";
import { CardProps } from "../../interfaces";
import { CartActionTypes } from "./action-types";

const initialState = {
  products: [],
};

const CartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      const productIsAlreadyInCart = state.products.some(
        (product: CardProps) => product.id === action.payload.id
      );

      if (!productIsAlreadyInCart) {
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      } else {
        alert("item já adicionado ao carrinho!");
        return state;
      }

    case CartActionTypes.REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        products: state.products.filter(
          (product: CardProps) => product.id !== action.payload.id
        ),
      };

    case CartActionTypes.INCREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products.map((product: CardProps) =>
          product.id === action.payload
            ? { ...product, amount: product.amount + 1 }
            : product
        ),
      };

    case CartActionTypes.DECREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products.map((product: CardProps) => {
          if (product.id === action.payload && product.amount > 1) {
            return { ...product, amount: product.amount - 1 };
          } else if (product.id === action.payload && product.amount === 1) {
            toast.warning("Remova o item do carrinho");
          }
          return product;
        }),
      };

    default:
      return state;
  }
};

export default CartReducer;
