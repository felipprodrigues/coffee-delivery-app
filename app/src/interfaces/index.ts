import { ReactElement, ReactNode } from "react";

export interface CartProps {
  // FUNCTIONS

  fetchAddress: (item: any) => void;
  setAddressNumber: React.Dispatch<React.SetStateAction<string>>;
  setAddressDetails: React.Dispatch<React.SetStateAction<string>>;
  setPaymentMethod: React.Dispatch<React.SetStateAction<string>>;
  handleOrder: (item?: any) => void;
  dispatch: React.Dispatch<React.SetStateAction<string[]>>;
  setFinalOrder: React.Dispatch<React.SetStateAction<OrderProps[]>>;
  setCheckedInput: React.Dispatch<React.SetStateAction<string>>;

  // STATES
  cartTotalAmount: number;
  addressNumber: string;
  addressDetails: string;
  dataCep: AddressProps;
  loading: boolean;
  paymentMethod: string;
  totalPrice: string;
  finalOrder: OrderProps[];
  newOrder: OrderProps[];
  checkedInput: string;
}

export interface AddressProps {
  cep: string;
  bairro: string;
  localidade: string;
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

export interface TagProps {
  icon: ReactNode;
  label: string;
  bgColor: string;
}

export interface PaymentProps {
  id: string;
  icon: JSX.Element;
  label: string;
}

export interface CardProps {
  id: string;
  title: string;
  label: string;
  tag: string | string[];
  image: string;
  price: string;
  amount: number;
  isSmall?: boolean;
}

export interface StatusProps {
  icon: ReactElement;
  msg: string;
  bgColor: string;
  status?: string;
}
