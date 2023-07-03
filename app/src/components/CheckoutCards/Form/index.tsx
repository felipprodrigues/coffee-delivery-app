import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { Card } from "../styles";
import { CardBlock, CardPaymentMethod, PaymentButton } from "./styles";
import { CartContext } from "../../../App";

interface PaymentProps {
  id: string;
  icon: JSX.Element;
  label: string;
}

export function FormCard() {
  const {
    addressNumber,
    setAddressNumber,
    addressDetails,
    setAddressDetails,
    dataCep,
    fetchAddress,
    setPaymentMethod,
  } = useContext(CartContext);

  const paymentMethodCards: PaymentProps[] = [
    {
      id: uuidv4(),
      icon: <CreditCard size={24} />,
      label: "cartão de crédito",
    },
    {
      id: uuidv4(),
      icon: <Money size={24} />,
      label: "cartão de débito",
    },
    {
      id: uuidv4(),
      icon: <Bank size={24} />,
      label: "dinheiro",
    },
  ];

  // const [inputChecked, setInputChecked] = useState(false);

  // function handleInput(param: any, item: any) {
  //   console.log(item, "aqui");
  //   const findItem = paymentMethodCards.find((method) => method.id === item.id);

  //   if (findItem) {
  //     setInputChecked(true);
  //   }
  //   // setInputChecked(itemId);
  // }

  // useEffect(() => {
  //   console.log(inputChecked, "aqui o efect");
  // }, [inputChecked]);

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
            value={dataCep.cep}
            placeholder="CEP"
            required
            onChange={({ target }) => fetchAddress(target.value)}
          />

          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            value={dataCep.logradouro}
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
            <input
              type="text"
              id="addressDetails"
              name="addressDetails"
              value={addressDetails}
              placeholder="Complemento (opcional)"
              onChange={({ target }) => setAddressDetails(target.value)}
            />
          </div>

          <div>
            <input
              type="text"
              id="neighbourhood"
              name="neighbourhood"
              value={dataCep.bairro}
              placeholder="Bairro"
              disabled
            />
            <input
              type="text"
              id="city"
              name="city"
              value={dataCep.cidade}
              placeholder="Cidade"
              disabled
            />
            <input
              type="text"
              id="state"
              name="state"
              value={dataCep.uf}
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
              // className={inputChecked ? "isChecked" : ""}
              >
                {item.icon}
                <input
                  key={item.label}
                  name="paymentMethod"
                  type="radio"
                  onChange={() => {
                    setPaymentMethod(item.label);
                  }}
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
