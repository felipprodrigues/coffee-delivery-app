/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink } from "react-router-dom";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { removeProductFromCart } from "../../../redux/cart/actions";
import {
  selectProductTotalPrice,
  selectProductsCount,
} from "../../../redux/cart/cart.selectors";
import { placeFinalOrder } from "../../../redux/order/actions";
// Styles
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
// ICONS
import { Trash } from "phosphor-react";

//Component
import { QuantityBox } from "../../QuantityBox";
import { CardProps } from "../../../interfaces";

export function CheckoutCard() {
  const productsCount = useSelector(selectProductsCount);
  const productsTotalPrice = useSelector(selectProductTotalPrice);
  const { products } = useSelector((state: any) => state.CartReducer);
  const { dataCep, addressNumber, paymentMethod, addressDetails } = useSelector(
    (state: any) => state.FormReducer
  );

  const dispatch = useDispatch();

  const handleRemoveItemFromCart = (id: CardProps) => {
    dispatch(removeProductFromCart(id));
  };

  const placeOrder = () => {
    const finalOrder = {
      dataCep,
      addressNumber,
      paymentMethod,
      addressDetails,
    };

    dispatch(placeFinalOrder(finalOrder));
  };

  return (
    <Card>
      <h3>Cafés selecionados</h3>

      {!products.length ? (
        <p>Nenhum item selecionado</p>
      ) : (
        <CardBlock>
          <CardCheckout>
            {products.map((product: any) => {
              return (
                <>
                  <CardCheckoutItem key={product.title}>
                    <img src={product.image} />

                    <CardQuantityHolder>
                      <span>{product.title}</span>

                      <div>
                        <QuantityBox selectedProduct={product} isCartItem />

                        <CardSelectAmount
                          onClick={() => handleRemoveItemFromCart(product)}
                        >
                          <Trash />
                          <span>REMOVER</span>
                        </CardSelectAmount>
                      </div>
                    </CardQuantityHolder>

                    <div>
                      <span>R$ {product.price}</span>
                    </div>
                  </CardCheckoutItem>
                </>
              );
            })}
          </CardCheckout>

          <CheckoutAmount>
            <div>
              <span>Total de itens</span>
              <span>{productsCount}</span>
            </div>
            <div>
              <span>Entrega</span>

              {!dataCep || dataCep.uf !== "SP" ? (
                <span>R$ 25,00</span>
              ) : (
                <span>R$ 5,00</span>
              )}
            </div>
            <div>
              <span>Total</span>
              <span>R$ {productsTotalPrice}</span>
            </div>
          </CheckoutAmount>

          <NavLink to="/success" id="confirmOrder">
            <CheckoutButton
              onClick={() => placeOrder()}
              type="button"
              disabled={!dataCep || !paymentMethod || !addressNumber}
            >
              <span>CONFIRMAR PEDIDO</span>
            </CheckoutButton>
          </NavLink>
        </CardBlock>
      )}
    </Card>
  );
}
