import { Minus, Plus } from "phosphor-react";
import { CardSelectAmount } from "../Cards/styles";
import { CartContext } from "../../App";
import { useContext } from "react";
import { CardProps } from "../../interfaces";

export function QuantityBox({ item }: any) {
  console.log(item, "auqi");

  const { setCartItems } = useContext(CartContext);

  function handleIncreaseAmount(item: CardProps) {
    console.log(item, "aqui");
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.map((card) => {
        if (card.id === item.id) {
          return { ...card, amount: card.amount + 1 };
        }
        return card;
      });

      return updatedCartItems;
    });
  }

  function handleDecreaseAmount(item: CardProps) {
    setCartItems((prevCartItems: any) => {
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
      <Minus size={16} onClick={() => handleDecreaseAmount(item)} />
      <span>{item.amount}</span>
      <Plus size={16} onClick={() => handleIncreaseAmount(item)} />
    </CardSelectAmount>
  );
}
