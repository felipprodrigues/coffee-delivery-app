//* Routing
import { BrowserRouter } from "react-router-dom";

import { Router } from "./Router";

//* Context
import { createContext, useEffect, useReducer, useState } from "react";

//* Themes
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/default";
import { GlobalStyle } from "./styles/global";
import { CardProps, cardData } from "./components/Cards/constants";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  loading: boolean;
  paymentMethod: string;
  setPaymentMethod: React.Dispatch<React.SetStateAction<string>>;
  handlePayment: React.Dispatch<React.SetStateAction<string>>;
  handleIncreaseAmount: (item: any) => void;
  handleDecreaseAmount: (item: any) => void;
  order: object[];
  handleOrder: (item?: any) => void;
  setOrder: React.Dispatch<React.SetStateAction<string[]>>;
  totalPrice: string;
  finalOrder: object[];
  setNewOrder: object[];
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
export interface OrderProps {
  address?: AddressProps;
  id: string;
  title: string;
  price: string;
  amount: number;
}

export const CartContext = createContext({} as CartProps);

export function App() {
  const [cartTotalAmount, setCartTotalAmount] = useState(0);
  const [cartItems, setCartItems] = useState<CardProps[]>(cardData);
  const [order, setOrder] = useState<OrderProps[]>([]);

  const [setNewOrder, dispatch] = useReducer(
    (state: OrderProps[], action: any) => {
      console.log(state, "aqui os estados");
      // console.log(action.payload, "aqui actions");

      if (action.type === "HANDLE_CART") {
        const draft = action.payload.draft;

        if (
          state.includes(draft) ||
          state.some((order) => order.id === draft.id)
        ) {
          toast.warning(
            "Produto já adicionado. Vá até a página de checkout para alterar a quantidade"
          );
          return state;
        } else {
          toast.success("Produto adicionado ao carrinho!");
          return [...state, draft];
        }
      }

      if (action.type === "REMOVE_ITEM_FROM_CART") {
        const clickedItem = action.payload.item;

        const draft = state.filter((order) => order.id !== clickedItem.id);

        return draft;
      }

      if (action.type === "CHECKOUT_INCREASE_ITEM_QUANTITY") {
        const clickedItem = action.payload.clickedItem;

        state = state.map((prevState: any) => {
          if (prevState.id === clickedItem.id) {
            return { ...prevState, amount: clickedItem.amount + 1 };
          } else {
            return prevState;
          }
        });
      }

      if (action.type === "CHECKOUT_DECREASE_ITEM_QUANTITY") {
        const clickedItem = action.payload.clickedItem;

        state = state.map((prevState: any) => {
          if (prevState.id === clickedItem.id && prevState.amount > 1) {
            return { ...prevState, amount: clickedItem.amount - 1 };
          } else {
            return prevState;
          }
        });
      }

      if (action.type === "INCREASE_ITEM_QUANTITY") {
        const draft = action.payload.draft;
        const clickedItem = action.payload.clickedItem;

        console.log(draft, "aqui o draft");
        // console.log(clickedItem, "o item q foi clicado");

        const updatedState = draft.map((item: any) => {
          if (item.id === clickedItem.id) {
            // Modify the item and return it
            return { ...item, amount: item.amount + 1 };
          }
          // Return the original item if no modification is needed
          return item;
        });

        return updatedState;
      }

      if (action.type === "DECREASE_ITEM_QUANTITY") {
        const clickedItem = action.payload.clickedItem;
        const draft = action.payload.draft;

        console.log(draft, "dragt");
        console.log(clickedItem, "item clicado");

        if (draft === clickedItem.id) {
          return { ...state, amount: clickedItem.amount + 1 };
        }
        return state;
      }

      return state;
    },
    []
  );

  useEffect(() => console.log(setNewOrder), [setNewOrder]);

  const [finalOrder, setFinalOrder] = useState<OrderProps>([]);

  const [loading, setLoading] = useState(false);

  // FORM STATES
  const [dataCep, setDataCep] = useState<object[]>([]);
  const [addressNumber, setAddressNumber] = useState("");
  const [addressDetails, setAddressDetails] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [totalPrice, setTotalPrice] = useState<string>("");

  useEffect(() => {
    if (!setNewOrder.length) {
      setCartTotalAmount(0);
      setTotalPrice("0");
      return;
    }

    const cartTotalAmount = setNewOrder.reduce((acc, curr) => {
      return acc + curr.amount;
    }, 0);

    const calculateTotal = setNewOrder.reduce((sum, item) => {
      const price = item.price.replace(",", ".");
      return sum + parseFloat(price) * item.amount;
    }, 0);

    setCartTotalAmount(cartTotalAmount);
    setTotalPrice(calculateTotal.toFixed(2));
  }, [setNewOrder, dataCep, paymentMethod, cartItems, finalOrder, totalPrice]);

  function handleCart(item: any) {
    const draft = cartItems.find((order) => order.id === item.id);

    if (draft?.amount === 0) {
      toast.warning("Adicione ao menos um item ao carrinho");
      return;
    }

    dispatch({
      type: "HANDLE_CART",
      payload: {
        draft,
      },
    });

    // setOrder((prevState: any) => {
    //   if (
    //     prevState.includes(draft) ||
    //     prevState.some((order: any) => order.id === item.id)
    //   ) {
    //     toast.warning(
    //       "Produto já adicionado. Vá até a página de checkout para alterar a quantidade"
    //     );
    //     return prevState;
    //   } else {
    //     toast.success("Produto adicionado ao carrinho!");
    //     return [...prevState, draft];
    //   }
    // });
  }

  function handleOrder() {
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
      metodoPagamento: paymentMethod,
    };

    const orderData: OrderProps = {
      ...order,
      address: newCepData,
    };

    setLoading(true);

    setTimeout(() => {
      setFinalOrder(orderData);
      setLoading(false);
      toast.success("Pedido registrado com sucesso!");
    }, 1000);
  }

  useEffect(() => {
    console.log(finalOrder, "final aqui");
  }, [finalOrder]);

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
    dispatch({
      type: "REMOVE_ITEM_FROM_CART",
      payload: {
        item,
      },
    });
  }

  function handleIncreaseAmount(item: any) {
    const draft = cartItems;

    dispatch({
      type: "INCREASE_ITEM_QUANTITY",
      payload: {
        clickedItem: item,
        draft,
      },
    });

    // setCartItems((prevCartItems) => {
    //   const updatedCartItems = prevCartItems.map((card) => {
    //     if (card.id === item.id) {
    //       return { ...card, amount: card.amount + 1 };
    //     }
    //     return card;
    //   });

    //   return updatedCartItems;
    // });
  }

  function handleDecreaseAmount(item: any) {
    const draft = cartItems.find((order) => order.id === item.id);

    dispatch({
      type: "DECREASE_ITEM_QUANTITY",
      payload: {
        clickedItem: item,
        draft,
      },
    });

    // setCartItems((prevCartItems: any) => {
    //   const updatedCartItems = prevCartItems.map((card: any) => {
    //     if (card.id === item.id && card.amount > 0) {
    //       const draft = { ...card, amount: card.amount - 1 };

    //       return draft;
    //     }
    //     return card;
    //   });

    //   return updatedCartItems;
    // });
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer position="top-left" />
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
          loading,
          setPaymentMethod,
          handleIncreaseAmount,
          handleDecreaseAmount,
          order,
          handleOrder,
          setOrder,
          totalPrice,
          finalOrder,
          setNewOrder,
          dispatch,
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
