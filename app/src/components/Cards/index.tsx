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

// interface CartContextType {
//   handleCart: () =>
// }

// const { handleCart } = useContext({});

export function Cards() {
  const { handleCart, setCounter, counter } = useContext(CartContext);
  // const [counter, setCounter] = useState(cardData);
  // const [cartItems, setCartItems] = useState([]);
  // const [cartItemsAmount, setCartItemsAmount] = useState(0);

  function handleIncreaseAmount(item: any) {
    setCounter((prevCardData) => {
      return prevCardData.map((card) => {
        if (card.id === item.id) {
          const draft = { ...card, amount: card.amount + 1 };
          return draft;
        }
        return card;
      });
    });
  }

  function handleDecreaseAmount(item: any) {
    setCounter((prevCardData) => {
      return prevCardData.map((card) => {
        if (card.id === item.id) {
          if (card.amount === 0) {
            return { ...card, amount: 0 };
          } else {
            const draft = { ...card, amount: card.amount - 1 };
            return draft;
          }
        }
        return card;
      });
    });
  }

  // function handleCart() {
  //   setCartItems((prevState) => [{ ...prevState, counter }]);

  //   console.log(counter, "aqui os itens");
  //   const amountItems = counter.map((item) => item.amount);

  //   const cartItemsAmount = amountItems.reduce((acc, curr) => {
  //     return acc + curr;
  //   }, 0);

  //   console.log(cartItemsAmount, "aqui os itens");
  //   setCartItemsAmount(cartItemsAmount);
  //   console.log(cartItemsAmount);
  // }

  const allCards = counter.map((card: CardProps) => {
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

          <div>
            <ShoppingCart size={24} onClick={() => handleCart()} />
          </div>
        </CardFooter>
      </Card>
    );
  });

  return allCards;
}
