//* Routing
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

//* Context
import { createContext, useState } from "react";

//* Themes
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/default";
import { GlobalStyle } from "./styles/global";
import { CardProps, CardProps, cardData } from "./components/Cards/constants";

interface CartProps {
  cartItemsAmount: number;
  cartItems: CardProps[];
  counter: CardProps[];
  handleCart: (item: any) => void;
  setCounter: React.Dispatch<React.SetStateAction<CardProps[]>>;

  removeItemFromCart: (item: any) => void;
}

export const CartContext = createContext({} as CartProps);

export function App() {
  const [counter, setCounter] = useState<CardProps[]>(cardData);
  const [cartItemsAmount, setCartItemsAmount] = useState(0);
  const [cartItems, setCartItems] = useState<CardProps[]>([]);

  function handleCartCounter() {
    const amountItems = counter.map((item) => item.amount);

    const cartTotalAmount = amountItems.reduce((acc, curr) => {
      return acc + curr;
    }, 0);

    setCartItemsAmount(cartTotalAmount);
  }

  function handleCart(item: any) {
    const draft = counter.find((order) => order.id === item.id);
    setCartItems((prevState: any) => {
      if (prevState.includes(draft)) {
        return prevState;
      } else {
        return [...prevState, draft];
      }
    });

    console.log(cartItems, "aqui o  cart items depois de empurrar o draft");

    handleCartCounter();
  }

  function removeItemFromCart(item: any) {
    const draft = cartItems.filter((order) => order.id !== item.id);

    setCartItems([...draft]);
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContext.Provider
        value={{
          handleCart,
          cartItemsAmount,
          cartItems,
          counter,
          setCounter,
          removeItemFromCart,
        }}
      >
        <BrowserRouter>
          <Router />
        </BrowserRouter>

        <GlobalStyle />
      </CartContext.Provider>
    </ThemeProvider>
  );
}

export default App;
