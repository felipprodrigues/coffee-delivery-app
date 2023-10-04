import { CreditCard, Money, Bank } from "phosphor-react";
import { PaymentProps } from "../interfaces";
import { v4 as uuidv4 } from "uuid";

export const paymentMethodCards: PaymentProps[] = [
  {
    id: uuidv4(),
    icon: <CreditCard size={24} />,
    label: "Cartão de Crédito",
  },
  {
    id: uuidv4(),
    icon: <Money size={24} />,
    label: "Cartão de Débito",
  },
  {
    id: uuidv4(),
    icon: <Bank size={24} />,
    label: "Dinheiro",
  },
];
