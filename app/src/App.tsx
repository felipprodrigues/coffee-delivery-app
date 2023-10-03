/* eslint-disable @typescript-eslint/no-explicit-any */
//* Routing
import { BrowserRouter } from "react-router-dom";

import { Router } from "./Router";

//* Context
import { createContext, useEffect, useReducer, useState } from "react";

import { CartReducer } from "./reducers/cart/reducer";

//* Redux
import { Provider } from "react-redux";
import store from "./redux/store";

//* Themes
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/default";
import { GlobalStyle } from "./styles/global";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CartProps, OrderProps, AddressProps } from "./interfaces";

export const CartContext = createContext({} as CartProps);

export function App() {
  const [loading, setLoading] = useState(false);
  const [cartTotalAmount, setCartTotalAmount] = useState(0);

  // Reducer
  const [newOrder, dispatch] = useReducer(CartReducer, []);

  // Final order
  const [finalOrder, setFinalOrder] = useState<OrderProps[]>([]);

  // FORM STATES
  const [dataCep, setDataCep] = useState<AddressProps>({
    cep: "",
    bairro: "",
    localidade: "",
    uf: "",
    logradouro: "",
  });
  const [addressNumber, setAddressNumber] = useState("");
  const [addressDetails, setAddressDetails] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [checkedInput, setCheckedInput] = useState("");

  useEffect(() => {
    if (!newOrder.length) {
      setCartTotalAmount(0);
      setTotalPrice("0");
      return;
    }
  }, [newOrder, dataCep, paymentMethod, finalOrder, totalPrice]);

  async function fetchAddress(cep: string): Promise<void> {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();

      setDataCep(responseData);
    } catch (error) {
      console.error("Attempt to fetch CEP details:", error);
    }
  }

  function handleOrder(): void {
    if (!dataCep?.cep) {
      toast.error("Preencha o formulário");
      return;
    }

    if (!addressNumber || !paymentMethod) {
      toast.error("Preencha todos os campos necessários");
      return;
    }

    const newCepData = {
      ...dataCep,
      numero: addressNumber,
      complemento: addressDetails || null,
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
      localidade: "",
      uf: "",
      logradouro: "",
    });
    setAddressNumber("");
    setPaymentMethod("");
    setTotalPrice("");
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer position="top-left" />

      {/* REDUX */}
      <Provider store={store}>
        {/* CONTEXT PROVIDER */}
        <CartContext.Provider
          value={{
            fetchAddress,
            setAddressNumber,
            setAddressDetails,
            setPaymentMethod,
            handleOrder,
            dispatch,
            setFinalOrder,
            setCheckedInput,

            cartTotalAmount,
            addressNumber,
            addressDetails,
            dataCep,
            loading,
            paymentMethod,
            totalPrice,
            finalOrder,
            newOrder,
            checkedInput,
          }}
        >
          <BrowserRouter>
            <Router />
          </BrowserRouter>

          <GlobalStyle />
        </CartContext.Provider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
