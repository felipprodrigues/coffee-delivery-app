import { Minus, Plus } from "phosphor-react";
import { CardSelectAmount } from "../Cards/styles";
import { CartContext } from "../../App";
import { useContext } from "react";
import { CardProps } from "../../interfaces";

// Redux
import { useDispatch, useSelector } from "react-redux";

export function QuantityBox({ item }: any) {
  const { currentCart } = useSelector((rootReducer) => rootReducer.CartReducer);

  const dispatch = useDispatch();

  console.log(currentCart, "123");

  function handleDecrease() {
    dispatch({
      type: "DECREASE_ITEM_QUANTITY",
      payload: { name: "felipe", amount: 20 },
    });
  }

  const { setCatalogItems, catalogItems } = useContext(CartContext);

  function handleIncreaseAmount(item: CardProps) {
    console.log(item);

    setCatalogItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.map((card) => {
        if (card.id === item.id) {
          return { ...card, amount: card.amount + 1 };
        }
        return card;
      });

      console.log(catalogItems, "aqui os items do carrinho");

      return updatedCartItems;
    });
  }

  function handleDecreaseAmount(item: CardProps) {
    setCatalogItems((prevCartItems: any) => {
      const updatedCartItems = prevCartItems.map((card: any) => {
        if (card.id === item.id && card.amount > 0) {
          const draft = { ...card, amount: card.amount - 1 };
          return draft;
        }
        return card;
      });
      return updatedCartItems;
    });
  }

  const isButton = true;
  const isSmall = true;

  return (
    <CardSelectAmount isSmall={isSmall} isButton={isButton}>
      <Minus size={16} onClick={() => handleDecrease()} />
      <span>{item.amount}</span>
      <Plus size={16} onClick={() => handleIncreaseAmount(item)} />
    </CardSelectAmount>
  );
}
