 
/* eslint-disable @typescript-eslint/no-explicit-any */
//* Routing
import { BrowserRouter } from "react-router-dom";

import { Router } from "./Router";

//* Context
import { createContext, useEffect, useReducer, useState } from "react";
import {
  handleCartAction,
  removeItemFromCartAction,
} from "./reducers/cart/actions";
import { CartReducer } from "./reducers/cart/reducer";

//* Themes
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/default";
import { GlobalStyle } from "./styles/global";
import { CardProps, cardData } from "./components/Cards/constants";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CartProps {
  // FUNCTIONS
  handleCart: (item: any) => void;
  removeItemFromCart: (item: any) => void;
  fetchAddress: (item: any) => void;
  setAddressNumber: React.Dispatch<React.SetStateAction<string>>;
  setAddressDetails: React.Dispatch<React.SetStateAction<string>>;
  setPaymentMethod: React.Dispatch<React.SetStateAction<string>>;
  handleIncreaseAmount: (item: any) => void;
  handleDecreaseAmount: (item: any) => void;
  handleOrder: (item?: any) => void;
  dispatch: React.Dispatch<React.SetStateAction<string[]>>;
  setFinalOrder: React.Dispatch<React.SetStateAction<OrderProps[]>>;
  // STATES
  cartTotalAmount: number;
  cartItems: CardProps[];
  addressNumber: string;
  addressDetails: string;
  dataCep: AddressProps;
  loading: boolean;
  paymentMethod: string;
  totalPrice: string;
  finalOrder: OrderProps[];
  newOrder: OrderProps[];
}

export interface AddressProps {
  cep: string;
  bairro: string;
  cidade: string;
  uf: string;
  logradouro: string;
  numero?: string;
  complemento?: string;
  metodoPagamento?: string;
}

export interface OrderProps {
  address?: AddressProps[];
  id: string;
  title: string;
  price: string;
  amount: number;
}

export const CartContext = createContext({} as CartProps);

export function App() {
  const [loading, setLoading] = useState(false);
  const [cartTotalAmount, setCartTotalAmount] = useState(0);
  const [cartItems, setCartItems] = useState<CardProps[]>(cardData);

  // Reducer
  const [newOrder, dispatch] = useReducer(CartReducer, []);

  // Final order
  const [finalOrder, setFinalOrder] = useState<OrderProps[]>([]);

  // FORM STATES
  const [dataCep, setDataCep] = useState<AddressProps>({
    cep: "",
    bairro: "",
    cidade: "",
    uf: "",
    logradouro: "",
  });
  const [addressNumber, setAddressNumber] = useState("");
  const [addressDetails, setAddressDetails] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [totalPrice, setTotalPrice] = useState("");

  useEffect(() => {
    if (!newOrder.length) {
      setCartTotalAmount(0);
      setTotalPrice("0");
      return;
    }

    const cartTotalAmount = newOrder.reduce((acc: number, curr: OrderProps) => {
      return acc + curr.amount;
    }, 0);

    const calculateTotal = newOrder.reduce((sum: number, item: OrderProps) => {
      const price = item.price.replace(",", ".");
      return sum + parseFloat(price) * item.amount;
    }, 0);

    setCartTotalAmount(cartTotalAmount);
    setTotalPrice(calculateTotal.toFixed(2));
    console.log(finalOrder, "final aqui");
  }, [newOrder, dataCep, paymentMethod, cartItems, finalOrder, totalPrice]);

  async function fetchAddress(cep: string): Promise<void> {
    const header = {
      headers: {
        Accept: "application/json",
      },
    };

    const response = await axios.get(`http://cep.la/${cep}`, header);

    setDataCep(response.data);
  }

  function handleCart(item: any): void {
    const draft: any = cartItems.find((order) => order.id === item.id);

    if (!draft) {
      toast.warning("Item não encontrado no carrinho");
      return;
    }

    if (draft?.amount === 0) {
      toast.warning("Adicione ao menos um item ao carrinho");
      return;
    }

    dispatch(handleCartAction(draft));
  }

  function handleOrder(): void {
    if (!dataCep?.cep) {
      toast.error("Preencha o formulário");
      return;
    }
    if (!addressNumber.length || !paymentMethod) {
      toast.error("Preencha todos os campos necessários");
      return;
    }

    const newCepData = {
      ...dataCep,
      numero: addressNumber,
      complemento: addressDetails,
    };

    const orderData = {
      ...newOrder,
      address: newCepData,
      metodoPagamento: paymentMethod,
    };

    setLoading(true);

    setTimeout(() => {
      setFinalOrder(orderData);
      setLoading(false);
      toast.success("Pedido registrado com sucesso!");
    }, 1000);

    setDataCep({
      cep: "",
      bairro: "",
      cidade: "",
      uf: "",
      logradouro: "",
    });
    setAddressNumber("");
    setPaymentMethod("");
    setTotalPrice("");
  }

  function removeItemFromCart(item: any) {
    dispatch(removeItemFromCartAction(item));
  }

  function handleIncreaseAmount(item: CardProps) {
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

  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer position="top-left" />
      <CartContext.Provider
        value={{
          handleCart,
          removeItemFromCart,
          fetchAddress,
          setAddressNumber,
          setAddressDetails,
          setPaymentMethod,
          handleIncreaseAmount,
          handleDecreaseAmount,
          handleOrder,
          dispatch,
          setFinalOrder,
          cartTotalAmount,
          cartItems,
          addressNumber,
          addressDetails,
          dataCep,
          loading,
          paymentMethod,
          totalPrice,
          finalOrder,
          newOrder,
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
