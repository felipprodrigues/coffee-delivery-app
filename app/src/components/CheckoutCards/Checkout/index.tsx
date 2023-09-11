/* eslint-disable @typescript-eslint/no-explicit-any */
//* Utils
import { useContext, useEffect, useState } from "react";

import {
  decreaseAmountAction,
  increaseAmountAction,
} from "../../../reducers/cart/actions";

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
import { OrderProps } from "../../../interfaces";

export function CheckoutCard() {
  const {
    removeItemFromCart,
    handleOrder,
    cartTotalAmount,
    totalPrice,
    dataCep,
    loading,
    newOrder,
    dispatch,
    addressNumber,
    checkedInput,
  } = useContext(CartContext);

  function decreaseAmount(item: OrderProps): void {
    dispatch(decreaseAmountAction(item));
  }

  function increaseAmount(item: OrderProps): void {
    dispatch(increaseAmountAction(item));
  }
  const isButton = true;
  const isSmall = false;

  const [isFormFilled, setIsFormFilled] = useState(false || "");
  const [isPaymentMethodSelected, setIsPaymentMethodSelected] =
    useState<boolean>(false);

  useEffect(() => {
    // Check if the form is filled (you can customize these conditions)
    const isFormValid =
      dataCep.cep &&
      addressNumber &&
      dataCep.logradouro &&
      dataCep.bairro &&
      dataCep.localidade &&
      dataCep.uf;

    setIsFormFilled(isFormValid);

    // Check if a payment method is selected
    setIsPaymentMethodSelected(checkedInput !== "");
  }, [dataCep, addressNumber, checkedInput]);

  return (
    <Card>
      <h3>Cafés selecionados</h3>

      {!newOrder.length ? (
        <p>Nenhum item selecionado</p>
      ) : (
        <CardBlock>
          <CardCheckout>
            {newOrder.map((item: any) => {
              return (
                <>
                  <CardCheckoutItem key={item.title}>
                    <img src={item.image} />

                    <CardQuantityHolder>
                      <span>{item.title}</span>

                      <div>
                        <CardSelectAmount isSmall={isSmall} isButton={isButton}>
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

          <NavLink to="/success" id="confirmOrder">
            <CheckoutButton
              onClick={() => handleOrder()}
              type="button"
              disabled={!isFormFilled && !isPaymentMethodSelected}
            >
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
