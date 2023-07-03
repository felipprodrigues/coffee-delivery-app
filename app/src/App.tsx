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
import { ToastContainer } from "react-toastify";

interface CartProps {
  cartTotalAmount: number;
  cartItems: CardProps[];
  handleCart: (item: any) => void;
  removeItemFromCart: (item: any) => void;
  fetchAddress: (item: any) => void;
  addressNumber: string;
  setAddressNumber: React.Dispatch<React.SetStateAction<string>>;
  addressDetails: string;
  setAddressDetails: React.Dispatch<React.SetStateAction<string>>;
  dataCep: object[];

  paymentMethod: string;
  setPaymentMethod: React.Dispatch<React.SetStateAction<string>>;
  handlePayment: React.Dispatch<React.SetStateAction<string>>;
  handleIncreaseAmount: (item: any) => void;
  handleDecreaseAmount: (item: any) => void;
  order: object[];
  handleOrder: (item?: any) => void;
  setOrder: React.Dispatch<React.SetStateAction<string[]>>;
  totalPrice: number;
}

export interface OrderProps {
  address?: AddressProps;
  id: string;
  title: string;
  price: string;
  amount: number;
}

export interface AddressProps {
  cep: string;
  bairro: string;
  cidade: string;
  uf: string;
  logradouro: string;
  numero?: string;
  complemento?: string;
  metodoPagamento: string;
}

export const CartContext = createContext({} as CartProps);

export function App() {
  const [cartTotalAmount, setCartTotalAmount] = useState(0);
  const [cartItems, setCartItems] = useState<CardProps[]>(cardData);
  const [order, setOrder] = useState<OrderProps[]>([]);
  const [finalOrder, setFinalOrder] = useState<OrderProps>([]);

  // FORM STATES
  const [dataCep, setDataCep] = useState<object[]>([]);
  const [addressNumber, setAddressNumber] = useState("");
  const [addressDetails, setAddressDetails] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [totalPrice, setTotalPrice] = useState<string>("");

  useEffect(() => {
    if (!order.length) {
      setCartTotalAmount(0);
      setTotalPrice("0");
      return;
    }

    const cartTotalAmount = order.reduce((acc, curr) => {
      return acc + curr.amount;
    }, 0);

    const calculatePrice = order.reduce((sum, item) => {
      const price = item.price.replace(",", ".");
      return sum + parseFloat(price);
    }, 0);

    const calculateTotalPrice = calculatePrice * cartTotalAmount;

    setCartTotalAmount(cartTotalAmount);
    setTotalPrice(calculateTotalPrice.toFixed(2));
  }, [order, dataCep, paymentMethod, cartItems, finalOrder, totalPrice]);

  function handleCart(item: any) {
    const draft = cartItems.find((order) => order.id === item.id);

    setOrder((prevState: any) => {
      if (prevState.includes(draft)) {
        return prevState;
      } else {
        return [...prevState, draft];
      }
    });
  }

  function handleOrder() {
    if (!order.length) return;

    const newCepData = {
      ...dataCep,
      numero: addressNumber,
      complemento: addressDetails,
      metodoPagamento: paymentMethod,
    };

    const orderData: OrderProps = {
      ...order,
      address: newCepData,
    };

    setFinalOrder(orderData);
  }

  useEffect(() => {
    const mapping = order.map((item) => item);
    console.log(mapping, "map");
  }, [order]);

  async function fetchAddress(cep: string) {
    const header = {
      headers: {
        Accept: "application/json",
      },
    };

    const response = await axios.get(`http://cep.la/${cep}`, header);

    setDataCep(response.data);
  }

  function removeItemFromCart(item: any) {
    console.log(item, "aqui ");
    const draft = order.filter((order) => order.id !== item.id);

    setOrder(draft);
  }

  function handleIncreaseAmount(item: any) {
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
          cartTotalAmount,
          cartItems,
          removeItemFromCart,
          fetchAddress,
          addressNumber,
          setAddressNumber,
          addressDetails,
          setAddressDetails,
          dataCep,

          setPaymentMethod,
          handleIncreaseAmount,
          handleDecreaseAmount,
          order,
          handleOrder,
          setOrder,
          totalPrice,
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
