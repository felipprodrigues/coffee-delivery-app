/* eslint-disable @typescript-eslint/no-explicit-any */
// Redux
import { useDispatch } from "react-redux";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
} from "../../redux/cart/actions";

// Icons
import { Minus, Plus } from "phosphor-react";
import { CardSelectAmount } from "../Cards/styles";

export function QuantityBox({
  selectedProduct,
  isCartItem,
  setListOfItems,
}: any) {
  const dispatch = useDispatch();

  function handleIncrease() {
    if (isCartItem) {
      dispatch(increaseProductQuantity(selectedProduct.id));
    } else {
      const updatedProduct = { ...selectedProduct };

      // if (updatedProduct.amount === 0) return;

      updatedProduct.amount += 1;

      setListOfItems((prevCardData: any) =>
        prevCardData.map((item: any) =>
          item.id === updatedProduct.id ? updatedProduct : item
        )
      );
    }
  }

  function handleDecrease() {
    if (isCartItem) {
      dispatch(decreaseProductQuantity(selectedProduct.id));
    } else {
      const updatedProduct = { ...selectedProduct };

      if (updatedProduct.amount > 0) {
        updatedProduct.amount -= 1;
      }

      setListOfItems((prevCardData: any) =>
        prevCardData.map((item: any) =>
          item.id === updatedProduct.id ? updatedProduct : item
        )
      );
    }
  }

  return (
    <CardSelectAmount>
      <Minus size={16} onClick={() => handleDecrease()} />
      <span>{selectedProduct.amount}</span>
      <Plus size={16} onClick={() => handleIncrease()} />
    </CardSelectAmount>
  );
}
