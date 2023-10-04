import { MapPin, Timer, CurrencyDollar } from "phosphor-react";
import { StatusProps } from "../interfaces";

export const successStatus: StatusProps[] = [
  {
    icon: <MapPin size={24} />,
    msg: "Entrega em ",
    bgColor: "#8047F8",
  },
  {
    icon: <Timer size={24} />,
    msg: "Previsão de entrega",
    status: "20 min - 30 min",
    bgColor: "#dbac2c",
  },
  {
    icon: <CurrencyDollar size={24} />,
    msg: "Pagamento na entrega",
    bgColor: "#c47f17",
  },
];
