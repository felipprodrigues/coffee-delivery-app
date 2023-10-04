/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAddress,
  updateAddressDetails,
  updateAddressNumber,
  updatePaymentMethod,
} from "../../../redux/form/actions";

// STYLES
import { Card } from "../styles";
import { CardBlock, CardPaymentMethod, PaymentButton } from "./styles";
import { CurrencyDollar, MapPinLine } from "phosphor-react";

// CONSTANTS
import { paymentMethodCards } from "../../../constants";

export function FormCard() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [addressDetails, setAddressDetails] = useState("");

  const dispatch = useDispatch();
  const { dataCep } = useSelector((state: any) => state.FormReducer);

  useEffect(() => {
    dispatch(updateAddressNumber(addressNumber));
    dispatch(updateAddressDetails(addressDetails));
    dispatch(updatePaymentMethod(paymentMethod));
  }, [dispatch, dataCep, addressNumber, addressDetails, paymentMethod]);

  function handlePaymentMethod(value: any) {
    if (value) {
      setPaymentMethod(value);
    }
    return;
  }

  return (
    <Card>
      <h3>Complete seu pedido</h3>

      <CardBlock>
        <div id="blockData">
          <MapPinLine size={24} id="blockSvgLight" />
          <span>
            <p>Endereço de Entrega</p>
            Informe o endereço onde deseja receber seu pedido
          </span>
        </div>

        <form>
          <input
            type="text"
            id="cep"
            name="cep"
            placeholder="CEP"
            required
            onChange={({ target }) => dispatch(fetchAddress(target.value))}
          />

          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            value={dataCep ? dataCep.logradouro : ""}
            placeholder="Rua"
            disabled
          />

          <div>
            <input
              type="text"
              id="addressNumber"
              name="addressNumber"
              value={addressNumber}
              placeholder="Número"
              required
              onChange={({ target }) => setAddressNumber(target.value)}
            />
            {addressNumber && (
              <input
                type="text"
                id="addressDetails"
                name="addressDetails"
                value={addressDetails}
                placeholder="Complemento (opcional)"
                onChange={({ target }) => setAddressDetails(target.value)}
              />
            )}
          </div>

          <div>
            <input
              type="text"
              id="neighbourhood"
              name="neighbourhood"
              value={dataCep ? dataCep.bairro : ""}
              placeholder="Bairro"
              disabled
            />
            <input
              type="text"
              id="city"
              name="city"
              value={dataCep ? dataCep.localidade : ""}
              placeholder="Cidade"
              disabled
            />
            <input
              type="text"
              id="state"
              name="state"
              value={dataCep ? dataCep.uf : ""}
              placeholder="UF"
              disabled
            />
          </div>
        </form>
      </CardBlock>

      <CardBlock>
        <div id="blockData">
          <CurrencyDollar size={24} id="blockSvgDark" />
          <span>
            <p>Pagamento</p>O pagamento é feito na entrega. Escolha a forma que
            deseja pagar
          </span>
        </div>

        <CardPaymentMethod>
          {paymentMethodCards.map((item) => {
            return (
              <PaymentButton
                className={paymentMethod === item.label ? "isChecked" : ""}
                key={item.id}
              >
                {item.icon}
                <input
                  key={item.label}
                  name="paymentMethod"
                  type="radio"
                  onChange={({ target }) => handlePaymentMethod(target.value)}
                  value={item.label}
                />
                <span>{item.label}</span>
              </PaymentButton>
            );
          })}
        </CardPaymentMethod>
      </CardBlock>
    </Card>
  );
}
