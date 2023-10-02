import { ShoppingCart } from "phosphor-react";
import { Card, CardFooter, CardImage, CardTag, CardTitle } from "./styles";

import { useContext } from "react";
import { CartContext } from "../../App";
import { CardProps } from "../../interfaces";
import { QuantityBox } from "../QuantityBox";

import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cart/actions";

export function Cards() {
  const { handleCart, catalogItems } = useContext(CartContext);

  const dispatch = useDispatch();

  const handleAddProductToCart = (product: any) => {
    dispatch(addProductToCart(product));
  };

  const allCards = catalogItems.map((card: CardProps) => {
    return (
      <Card key={card.id}>
        <CardImage>
          <img src={card.image} />
        </CardImage>

        <CardTag key={card.id}>
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

          <QuantityBox item={card} />

          <div onClick={() => handleAddProductToCart(card)}>
            <ShoppingCart size={24} />
          </div>
        </CardFooter>
      </Card>
    );
  });

  return allCards;
}
