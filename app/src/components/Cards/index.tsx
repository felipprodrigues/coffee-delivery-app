import { ShoppingCart } from "phosphor-react";
import { Card, CardFooter, CardImage, CardTag, CardTitle } from "./styles";

import { CardProps } from "../../interfaces";
import { QuantityBox } from "../QuantityBox";

import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cart/actions";
import { coffeeList } from "../../constants";
import { useState } from "react";
import { toast } from "react-toastify";

export function Cards() {
  const [listOfItems, setListOfItems] = useState(coffeeList);

  const dispatch = useDispatch();

  const handleAddProductToCart = (product: any) => {
    if (product.amount === 0) {
      toast.warning("Adicione ao menos um item no carrinho!");
      return;
    }

    dispatch(addProductToCart(product));
  };

  const allCards = listOfItems.map((card: CardProps, index: number) => {
    return (
      <Card key={`${card.label}-${card.id}-${index}`}>
        <CardImage>
          <img src={card.image} />
        </CardImage>

        <CardTag key={`${card.label}-${card.id}-${index}`}>
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

          <QuantityBox selectedProduct={card} setListOfItems={setListOfItems} />

          <div onClick={() => handleAddProductToCart(card)}>
            <ShoppingCart size={24} />
          </div>
        </CardFooter>
      </Card>
    );
  });

  return allCards;
}
