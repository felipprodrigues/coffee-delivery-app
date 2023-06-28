//* Routing
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

//* Context
import { createContext, useEffect, useState } from "react";

//* Themes
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/default";
import { GlobalStyle } from "./styles/global";
import { CardProps, cardData } from "./components/Cards/constants";
import axios from "axios";

interface CartProps {
  cartItemsAmount: number;
  cartItems: CardProps[];
  // counter: CardProps[];
  handleCart: (item: any) => void;
  // setCounter: React.Dispatch<React.SetStateAction<CardProps[]>>;
  removeItemFromCart: (item: any) => void;
  fetchAddress: (item: any) => void;
  addressNumber: string;
  setAddressNumber: React.Dispatch<React.SetStateAction<string>>;
  addressDetails: string;
  setAddressDetails: React.Dispatch<React.SetStateAction<string>>;
  dataCep: object[];
  handleDeliveryForm: (item: any) => void;
  paymentMethod: string;
  setPaymentMethod: React.Dispatch<React.SetStateAction<string>>;
  handlePayment: React.Dispatch<React.SetStateAction<string>>;
  handleIncreaseAmount: (item: any) => void;
  handleDecreaseAmount: (item: any) => void;
}

export const CartContext = createContext({} as CartProps);

export function App() {
  // const [counter, setCounter] = useState<CardProps[]>(cardData);
  const [cartItemsAmount, setCartItemsAmount] = useState(0);
  const [cartItems, setCartItems] = useState<CardProps[]>(cardData);

  // FORM STATES
  const [dataCep, setDataCep] = useState<object[]>([]);
  const [addressNumber, setAddressNumber] = useState("");
  const [addressDetails, setAddressDetails] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    // console.log(dataCep, "aqui o data cep");
    // console.log(paymentMethod, "useEffect aqui");
    // console.log(cartItems, "cartItems aqui aqui");
  }, [dataCep, paymentMethod, cartItems]);

  function handleCartCounter() {
    const amountItems = cartItems.map((item) => item.amount);

    const cartTotalAmount = amountItems.reduce((acc, curr) => {
      return acc + curr;
    }, 0);

    setCartItemsAmount(cartTotalAmount);
  }

  function handleCart(item: any) {
    const draft = cartItems.find((order) => order.id === item.id);
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

    setCartItems(draft);
  }

  function handleDeliveryForm() {
    const newData = {
      ...dataCep,
      number: addressNumber,
      complemento: addressDetails,
      metodoPagamento: paymentMethod,
    };

    setDataCep(newData);
  }

  async function fetchAddress(cep: string) {
    const header = {
      headers: {
        Accept: "application/json",
      },
    };

    const response = await axios.get(`http://cep.la/${cep}`, header);

    setDataCep(response.data);
    console.log(response.data);
  }

  function handleIncreaseAmount(item: any) {
    console.log(cartItems, "antes");

    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.map((card) => {
        if (card.id === item.id) {
          console.log(card.amount, "aqui o cart");
          return { ...card, amount: card.amount + 1 };
        }
        return card;
      });

      return updatedCartItems;
    });

    console.log(cartItems, "depois");
  }

  function handleDecreaseAmount(item: any) {
    setCartItems((prevCardData) => {
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

  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContext.Provider
        value={{
          handleCart,
          cartItemsAmount,
          cartItems,
          // counter,
          // setCounter,
          removeItemFromCart,
          fetchAddress,
          addressNumber,
          setAddressNumber,
          addressDetails,
          setAddressDetails,
          dataCep,
          handleDeliveryForm,
          setPaymentMethod,
          handleIncreaseAmount,
          handleDecreaseAmount,
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
