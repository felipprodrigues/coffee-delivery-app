import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import { TagProps } from "../../../interfaces";

export const tags: TagProps[] = [
  {
    icon: <ShoppingCart size={24} />,
    label: "Compra simples e segura",
    bgColor: "#c47f17",
  },
  {
    icon: <Package size={24} />,
    label: "Embalagem mantém o café intacto",
    bgColor: "#dbac2c",
  },
  {
    icon: <Timer size={24} />,
    label: "Entrega rápida e rastreada",
    bgColor: "#8047F8",
  },
  {
    icon: <Coffee size={24} />,
    label: "O café chega fresquinho até você",
    bgColor: "#574F4D",
  },
];
