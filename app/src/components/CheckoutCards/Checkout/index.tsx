/* eslint-disable @typescript-eslint/no-explicit-any */
//* Utils
import { useContext, useEffect, useState } from "react";

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
import { Trash } from "phosphor-react";

//* Component
import { CartContext } from "../../../App";
import { NavLink } from "react-router-dom";
import { CardProps } from "../../../interfaces";
import { QuantityBox } from "../../QuantityBox";
import { ThreeDots } from "react-loader-spinner";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { removeProductFromCart } from "../../../redux/cart/actions";
import {
  selectProductTotalPrice,
  selectProductsCount,
} from "../../../redux/cart/cart.selectors";

export function CheckoutCard() {
  const { handleOrder, dataCep, loading, addressNumber, checkedInput } =
    useContext(CartContext);

  const { products } = useSelector(
    (rootReducer: unknown) => rootReducer.CartReducer
  );

  const productsCount = useSelector(selectProductsCount);
  const productsTotalPrice = useSelector(selectProductTotalPrice);

  const dispatch = useDispatch();

  const handleRemoveItemFromCart = (id: CardProps) => {
    dispatch(removeProductFromCart(id));
  };

  const [isFormFilled, setIsFormFilled] = useState(false || "");
  const [isPaymentMethodSelected, setIsPaymentMethodSelected] =
    useState<boolean>(false);

  useEffect(() => {
    const isFormValid =
      dataCep.cep &&
      addressNumber &&
      dataCep.logradouro &&
      dataCep.bairro &&
      dataCep.localidade &&
      dataCep.uf;

    setIsFormFilled(isFormValid);

    setIsPaymentMethodSelected(checkedInput !== "");
  }, [dataCep, addressNumber, checkedInput]);

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
              {dataCep.uf === "SP" ? (
                <span>R$ 5,00</span>
              ) : (
                <span>R$ 25,00</span>
              )}
            </div>
            <div>
              <span>Total</span>
              <span>R$ {productsTotalPrice}</span>
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
