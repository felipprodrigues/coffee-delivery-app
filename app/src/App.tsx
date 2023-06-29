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
  handleCart: (item: any) => void;
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
  order: object[];
  handleOrder: (item: any) => void;
}

export interface OrderProps {
  cep: string;
  bairro: string;
  cidade: string;
  uf: string;
  logradouro: string;
  number?: string;
  complemento?: string;
  metodoPagamento: string;
  id: string;
  title: string;
  price: string;
  amount: number;
}

export const CartContext = createContext({} as CartProps);

export function App() {
  const [cartItemsAmount, setCartItemsAmount] = useState(0);
  const [cartItems, setCartItems] = useState<CardProps[]>(cardData);
  const [order, setOrder] = useState<OrderProps[]>([]);

  // FORM STATES
  const [dataCep, setDataCep] = useState<object[]>([]);
  const [addressNumber, setAddressNumber] = useState("");
  const [addressDetails, setAddressDetails] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    console.log(order, "aqui a order");
    console.log(dataCep, "aqui a order");
  }, [dataCep, paymentMethod, cartItems, order]);

  function handleCart(item: any) {
    const draft = cartItems.find((order) => order.id === item.id);
    setOrder((prevState: any) => {
      if (prevState.includes(draft)) {
        return prevState;
      } else {
        return [...prevState, draft];
      }
    });

    handleCartCounter();
  }

  function handleOrder(param: any) {
    if (!order.length) return;

    console.log(order, "aqui  a order");
    console.log(dataCep, "recebido da função");
    const orderData = {
      ...order,
      dataCep,
    };
    console.log(orderData, "objeto montado");

    // setOrder(orderData);
  }

  function handleDeliveryForm() {
    const newCepData = {
      ...dataCep,
      number: addressNumber,
      complemento: addressDetails,
      metodoPagamento: paymentMethod,
    };

    setDataCep(newCepData);
  }

  function handleCartCounter() {
    const amountItems = cartItems.map((item) => item.amount);

    const cartTotalAmount = amountItems.reduce((acc, curr) => {
      return acc + curr;
    }, 0);

    setCartItemsAmount(cartTotalAmount);
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

  function removeItemFromCart(item: any) {
    const draft = order.filter((order) => order.id !== item.id);

    setOrder(draft);
  }

  function handleIncreaseAmount(item: any) {
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
  }

  function handleDecreaseAmount(item: any) {
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
          order,
          handleOrder,
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
