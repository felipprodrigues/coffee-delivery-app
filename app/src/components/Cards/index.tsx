import { Minus, Plus, ShoppingCart } from "phosphor-react";
import {
  Card,
  CardFooter,
  CardImage,
  CardSelectAmount,
  CardTag,
  CardTitle,
} from "./styles";
import { CardProps } from "./constants";
import { useContext } from "react";
import { CartContext } from "../../App";

export function Cards() {
  const { handleCart, handleIncreaseAmount, handleDecreaseAmount, cartItems } =
    useContext(CartContext);

  const allCards = cartItems.map((card: CardProps) => {
    return (
      <Card>
        <CardImage>
          <img src={card.image} />
        </CardImage>

        <CardTag>
          {Array.isArray(card.tag) && card.tag.length > 1 ? (
            card.tag.map((item, index) => (
              <div id="label">
                <span key={index}>{item}</span>
              </div>
            ))
          ) : (
            <div id="label">
              <span>{card.tag}</span>
            </div>
          )}
        </CardTag>

        <CardTitle>
          <h3>{card.title}</h3>
          <span>{card.label}</span>
        </CardTitle>

        <CardFooter>
          <span>
            R$ <h2>{card.price}</h2>
          </span>

          <CardSelectAmount>
            <Minus size={16} onClick={() => handleDecreaseAmount(card)} />
            <span>{card.amount}</span>
            <Plus size={16} onClick={() => handleIncreaseAmount(card)} />
          </CardSelectAmount>

          <div onClick={() => handleCart(card)}>
            <ShoppingCart size={24} />
          </div>
        </CardFooter>
      </Card>
    );
  });

  return allCards;
}
