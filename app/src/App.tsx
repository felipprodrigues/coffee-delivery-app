/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
//* Routing
import { BrowserRouter } from "react-router-dom";

import { Router } from "./Router";

//* Context
import { createContext, useEffect, useState } from "react";

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
  // CEP STATES
  const [dataCep, setDataCep] = useState<AddressProps>({
    cep: "",
    bairro: "",
    localidade: "",
    uf: "",
    logradouro: "",
  });
  // FORM STATES
  const [addressNumber, setAddressNumber] = useState("");
  const [addressDetails, setAddressDetails] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [checkedInput, setCheckedInput] = useState("");
  // Final order
  const [finalOrder, setFinalOrder] = useState<OrderProps[]>([]);

  useEffect(() => {}, [dataCep, paymentMethod, finalOrder]);

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
      address: newCepData,
      metodoPagamento: paymentMethod,
    };

    setLoading(true);

    setTimeout(() => {
      // setFinalOrder(orderData);
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
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer position="top-left" autoClose={2000} />

      {/* REDUX */}
      <Provider store={store}>
        {/* CONTEXT PROVIDER */}
        <CartContext.Provider
          value={{
            setAddressNumber,
            setAddressDetails,
            setPaymentMethod,
            handleOrder,
            setFinalOrder,
            setCheckedInput,
            setDataCep,

            addressNumber,
            addressDetails,
            dataCep,
            loading,
            paymentMethod,
            finalOrder,
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
