import { Minus, Plus, ShoppingCart } from "phosphor-react";
import {
  Card,
  CardFooter,
  CardImage,
  CardSelectAmount,
  CardTag,
  CardTitle,
} from "./styles";

import americano from "../../assets/americano.png";
import arabe from "../../assets/arabe.png";
import capuccino from "../../assets/capuccino.png";
import cubano from "../../assets/cubano.png";
import expressoTradicional from "../../assets/Coffee.png";
import expressoCreamy from "../../assets/expressocreamy.png";
import expressoGelado from "../../assets/expressogelado.png";
import havaiano from "../../assets/havaiano.png";
import hotchocolate from "../../assets/hotchocolate.png";
import irlandes from "../../assets/irlandes.png";
import latte from "../../assets/latte.png";
import moccacino from "../../assets/moccacino.png";
import macchiato from "../../assets/macchiato.png";
import cafeComLeite from "../../assets/comLeite.png";
import { v4 as uuidv4 } from "uuid";

interface CardProps {
  id: string;
  title: string;
  label: string;
  tag: string | string[];
  image: string;
}

export function Cards() {
  const singleId = Math.random(uuidv4() * 10000)
    .toFixed(5)
    .toString()
    .split("")
    .slice(2)
    .join("");

  const cardData: CardProps[] = [
    {
      id: singleId,
      title: "Expresso Tradicional",
      label: "O tradicional café feito com água quente e grãos moídos",
      tag: "Tradicional",
      image: expressoTradicional,
    },
    {
      id: singleId,
      title: "Expresso Americano",
      label: "Expresso diluído, menos intenso que o tradicional",
      tag: "Tradicional",
      image: americano,
    },
    {
      id: singleId,
      title: "Expresso Cremoso",
      label: "Café expresso tradicional com espuma cremosa",
      tag: "Tradicional",
      image: expressoCreamy,
    },
    {
      id: singleId,
      title: "Expresso Gelado",
      label: "Bebida preparada com café expresso e cubos de gelo",
      tag: ["Tradicional", "Gelado"],
      image: expressoGelado,
    },
    {
      id: singleId,
      title: "Café com Leite",
      label: "Meio a meio de expresso tradicional com leite vaporizado",
      tag: ["Tradicional", "Com Leite"],
      image: cafeComLeite,
    },
    {
      id: singleId,
      title: "Latte",
      label: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      tag: ["Tradicional", "Com Leite"],
      image: latte,
    },
    {
      id: singleId,
      title: "Capuccino",
      label: "Bebida com canela feita de doses iguais de café, leite e espuma",
      tag: ["Tradicional", "Com Leite"],

      image: capuccino,
    },
    {
      id: singleId,
      title: "Macchiato",
      label: "Café expresso misturado com um pouco de leite quente e espuma",
      tag: ["Tradicional", "Com Leite"],

      image: macchiato,
    },
    {
      id: singleId,
      title: "Moccacino",
      label: "Café expresso com calda de chocolate, pouco leite e espuma",

      tag: ["Tradicional", "Com Leite"],
      image: moccacino,
    },
    {
      id: singleId,
      title: "Chocolate Quente",
      label: "Bebida feita com chocolate dissolvido no leite quente e café",

      tag: ["Especial", "Com Leite"],
      image: hotchocolate,
    },
    {
      id: singleId,
      title: "Cubano",
      label: "Drink gelado de café expresso com rum, creme de leite e hortelã",

      tag: ["Especial", "Alcoólico", "Gelado"],
      image: cubano,
    },
    {
      id: singleId,
      title: "Havaiano",
      label: "Bebida adocicada preparada com café e leite de coco",
      tag: "Especial",
      image: havaiano,
    },
    {
      id: singleId,
      title: "Arabe",
      label: "Bebida preparada com grãos de café árabe e especiarias",
      tag: "Especial",
      image: arabe,
    },
    {
      id: singleId,
      title: "Irlandês",
      label: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      tag: ["Especial", "Alcoólico"],
      image: irlandes,
    },
  ];

  const allCards = cardData.map((card: CardProps) => {
    return (
      <Card>
        <CardImage>
          <img src={card.image} />
        </CardImage>

        <CardTag>
          {Array.isArray(card.tag) && card.tag.length > 1 ? (
            card.tag.map((item, index) => (
              <div id="label">
                <span key={index}>{item}</span>
              </div>
            ))
          ) : (
            <div id="label">
              <span>{card.tag}</span>
            </div>
          )}
        </CardTag>

        <CardTitle>
          <h3>{card.title}</h3>
          <span>{card.label}</span>
        </CardTitle>

        <CardFooter>
          <span>
            R$ <h2>9,90</h2>
          </span>

          <CardSelectAmount>
            <Minus size={16} />
            <span>0</span>
            <Plus size={16} />
          </CardSelectAmount>

          <div>
            <ShoppingCart size={24} />
          </div>
        </CardFooter>
      </Card>
    );
  });

  return allCards;
}
