import { ReactElement, ReactNode } from "react";

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
