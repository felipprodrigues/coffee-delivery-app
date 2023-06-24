import { CardBlock } from "../Form/styles";
import { Card } from "../styles";

import {
  CardCheckout,
  CardCheckoutItem,
  CardQuantityHolder,
  CheckoutAmount,
  CheckoutButton,
} from "./styles";

import { cardData } from "../../Cards/constants";
import { Minus, Plus, Trash } from "phosphor-react";
import { CardSelectAmount } from "../../Cards/styles";
import { NavLink } from "react-router-dom";

export function CheckoutCard() {
  return (
    <Card>
      <h3>Cafés selecionados</h3>

      <CardBlock>
        <CardCheckout>
          {cardData.map((item) => {
            return (
              <>
                {item.title === "Expresso Tradicional" ||
                item.title === "Latte" ? (
                  <CardCheckoutItem>
                    <img src={item.image} />

                    <CardQuantityHolder>
                      <span>{item.title}</span>

                      <div>
                        <CardSelectAmount>
                          <Minus size={16} />
                          <span>0</span>
                          <Plus size={16} />
                        </CardSelectAmount>

                        <CardSelectAmount>
                          <Trash />

                          <span>REMOVER</span>
                        </CardSelectAmount>
                      </div>
                    </CardQuantityHolder>

                    <div>
                      <span>R$ {item.price}</span>
                    </div>
                  </CardCheckoutItem>
                ) : null}
              </>
            );
          })}
        </CardCheckout>

        <CheckoutAmount>
          <div>
            <span>Total de itens</span>
            <span>R$ 13,00</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>R$ 5,00</span>
          </div>
          <div>
            <span>Total</span>
            <span>R$ 18,00</span>
          </div>
        </CheckoutAmount>

        <NavLink to="/success">
          <CheckoutButton type="button">CONFIRMAR PEDIDO</CheckoutButton>
        </NavLink>
      </CardBlock>
    </Card>
  );
}
