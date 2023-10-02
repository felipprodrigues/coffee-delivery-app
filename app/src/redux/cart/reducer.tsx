/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { toast } from "react-toastify";
import { CardProps } from "../../interfaces";
import { CartActionTypes } from "./action-types";
import { increaseItemAmount } from "../../utils/increaseItemAmount";

const initialState = {
  products: [],
  productsTotalPrice: 0,
};

const CartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      const productIsAlreadyInCart = state.products.some(
        (product: CardProps) => product.id === action.payload.id
      );

      // if (!state.products.length) {
      //   toast.warning("Adicione ao menos um item no carrinho");
      //   return state;
      // }

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
      // Use the increaseItemAmount utility function to update the product quantity
      const updatedProducts = increaseItemAmount(
        state.products,
        action.payload.id
      );

      return {
        ...state,
        products: updatedProducts,
      };
    // case CartActionTypes.INCREASE_PRODUCT_QUANTITY:
    //   return {
    //     ...state,
    //     products: state.products.map((product: CardProps) =>
    //       product.id === action.payload.id
    //         ? { ...product, amount: product.amount + 1 }
    //         : product
    //     ),
    // };

    default:
      return state;
  }
};

export default CartReducer;
