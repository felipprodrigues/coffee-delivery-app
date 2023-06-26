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
  handleCart: () => void;
  setCounter: React.Dispatch<React.SetStateAction<CardProps[]>>;
}

export const CartContext = createContext({} as CartProps);

export function App() {
  const [counter, setCounter] = useState<CardProps[]>(cardData);
  const [cartItemsAmount, setCartItemsAmount] = useState(0);
  const [cartItems, setCartItems] = useState<CardProps[]>([]);

  function handleCart() {
    setCartItems((prevState: any) => [{ ...prevState, counter }]);

    console.log(counter, "aqui os itens");
    const amountItems = counter.map((item) => item.amount);

    const cartItemsAmount = amountItems.reduce((acc, curr) => {
      return acc + curr;
    }, 0);

    console.log(cartItemsAmount, "aqui os itens");
    setCartItemsAmount(cartItemsAmount);
    console.log(cartItemsAmount);
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContext.Provider
        value={{ handleCart, cartItemsAmount, cartItems, counter, setCounter }}
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
