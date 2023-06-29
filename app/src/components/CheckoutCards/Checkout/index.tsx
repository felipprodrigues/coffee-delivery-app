//* Utils
import { useContext } from "react";

//* Styles
import { CardBlock } from "../Form/styles";
import { Card } from "../styles";
import {
  CardCheckout,
  CardCheckoutItem,
  CardQuantityHolder,
  CheckoutAmount,
  CheckoutButton,
} from "./styles";
import { CardSelectAmount } from "../../Cards/styles";
import { Minus, Plus, Trash } from "phosphor-react";

//* Component
import { CartContext } from "../../../App";

export function CheckoutCard() {
  const { handleOrder, order, removeItemFromCart, handleDeliveryForm } =
    useContext(CartContext);

  return (
    <Card>
      <h3>Cafés selecionados</h3>

      <CardBlock>
        <CardCheckout>
          {order.map((item) => {
            // console.log(cartItems, "dentro do checkout");
            return (
              <>
                <CardCheckoutItem key={item.title}>
                  <img src={item.image} />

                  <CardQuantityHolder>
                    <span>{item.title}</span>

                    <div>
                      <CardSelectAmount>
                        <Minus size={16} />
                        <span>{item.amount}</span>
                        <Plus size={16} />
                      </CardSelectAmount>

                      <CardSelectAmount
                        isButton
                        isSmall
                        onClick={() => removeItemFromCart(item)}
                      >
                        <Trash />
                        <span>REMOVER</span>
                      </CardSelectAmount>
                    </div>
                  </CardQuantityHolder>

                  <div>
                    <span>R$ {item.price}</span>
                  </div>
                </CardCheckoutItem>
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

        {/* <NavLink to="/success"> */}
        <CheckoutButton onClick={() => handleOrder()} type="button">
          CONFIRMAR PEDIDO
        </CheckoutButton>
        {/* </NavLink> */}
      </CardBlock>
    </Card>
  );
}
