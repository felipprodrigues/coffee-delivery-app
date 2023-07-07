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

import { ThreeDots } from "react-loader-spinner";

//* Component
import { CartContext } from "../../../App";
import { NavLink } from "react-router-dom";

export function CheckoutCard() {
  const {
    order,
    removeItemFromCart,
    handleOrder,
    setOrder,
    cartTotalAmount,
    totalPrice,
    dataCep,
    loading,
    setNewOrder,
    dispatch,
  } = useContext(CartContext);

  function decreaseAmount(item: any) {
    dispatch({
      type: "CHECKOUT_DECREASE_ITEM_QUANTITY",
      payload: {
        clickedItem: item,
      },
    });
  }

  function increaseAmount(item: any) {
    dispatch({
      type: "CHECKOUT_INCREASE_ITEM_QUANTITY",
      payload: {
        clickedItem: item,
      },
    });
  }

  return (
    <Card>
      <h3>Cafés selecionados</h3>

      {!setNewOrder.length ? (
        <p>Nenhum item selecionado</p>
      ) : (
        <CardBlock>
          <CardCheckout>
            {setNewOrder.map((item: any) => {
              return (
                <>
                  <CardCheckoutItem key={item.title}>
                    <img src={item.image} />

                    <CardQuantityHolder>
                      <span>{item.title}</span>

                      <div>
                        <CardSelectAmount>
                          <Minus
                            size={16}
                            onClick={() => decreaseAmount(item)}
                          />
                          <span>{item.amount}</span>
                          <Plus
                            size={16}
                            onClick={() => increaseAmount(item)}
                          />
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
              <span>{cartTotalAmount}</span>
            </div>
            <div>
              <span>Entrega</span>
              {dataCep.uf === "SP" ? (
                <span>R$ 5,00</span>
              ) : (
                <span>R$ 25,00</span>
              )}
            </div>
            <div>
              <span>Total</span>
              <span>R$ {totalPrice}</span>
            </div>
          </CheckoutAmount>

          <NavLink to="/success">
            <CheckoutButton onClick={() => handleOrder()} type="button">
              {loading ? (
                <ThreeDots
                  height="20"
                  width="50"
                  radius="9"
                  color="#fff"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  visible={true}
                />
              ) : (
                <span>CONFIRMAR PEDIDO</span>
              )}
            </CheckoutButton>
          </NavLink>
        </CardBlock>
      )}
    </Card>
  );
}
