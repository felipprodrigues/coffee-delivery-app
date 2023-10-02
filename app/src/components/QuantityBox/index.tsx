import { Minus, Plus } from "phosphor-react";
import { CardSelectAmount } from "../Cards/styles";
// import { CartContext } from "../../App";
// import { useContext } from "react";
import { CardProps } from "../../interfaces";

// Redux
import { useDispatch } from "react-redux";
import { increaseItemAmount } from "../../utils/increaseItemAmount";
// import { increaseItemAmount } from "../../utils/increaseItemAmount";
// import { increaseProductQuantity } from "../../redux/cart/actions";
// import { ActionTypes } from "../../redux/cart/action-types";
// import { decreaseAmount } from "../../redux/cart/actions";

export function QuantityBox({ item }: any) {
  // const { currentCart } = useSelector((rootReducer) => rootReducer.CartReducer);

  const dispatch = useDispatch();

  // function handleIncreaseProductQuantity(product, productId) {
  //   console.log(product, productId);
  //   // dispatch(increaseItemAmount(product, productId));
  // }

  // function handleDecrease(param: CardProps) {
  //   if (param.amount > 0) {
  //     dispatch(decreaseAmount({ ...param, amount: param.amount - 1 }));
  //   }
  // }

  // const { setCatalogItems, catalogItems } = useContext(CartContext);

  // function handleIncreaseAmount(item: CardProps) {
  //   console.log(item);

  //   setCatalogItems((prevCartItems) => {
  //     const updatedCartItems = prevCartItems.map((card) => {
  //       if (card.id === item.id) {
  //         return { ...card, amount: card.amount + 1 };
  //       }
  //       return card;
  //     });

  //     console.log(catalogItems, "aqui os items do carrinho");

  //     return updatedCartItems;
  //   });
  // }

  // function handleDecreaseAmount(item: CardProps) {
  //   setCatalogItems((prevCartItems: any) => {
  //     const updatedCartItems = prevCartItems.map((card: any) => {
  //       if (card.id === item.id && card.amount > 0) {
  //         const draft = { ...card, amount: card.amount - 1 };
  //         return draft;
  //       }
  //       return card;
  //     });
  //     return updatedCartItems;
  //   });
  // }

  const isButton = true;
  const isSmall = true;

  console.log(item.id, "aqui o item");

  return (
    <CardSelectAmount isSmall={isSmall} isButton={isButton}>
      <Minus
        size={16}
        //  onClick={() => handleDecrease(item)}
      />
      <span>{item.amount}</span>
      <Plus size={16} onClick={() => increaseItemAmount(item)} />
    </CardSelectAmount>
  );
}
