import { useEffect, useState } from "react";
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

interface PaymentProps {
  id: string;
  icon: JSX.Element;
  label: string;
}

export function FormCard() {
  const [dataCep, setDataCep] = useState("");
  const [paymentType, setPaymentType] = useState("");

  const singleId = Math.random(uuidv4() * 10000)
    .toFixed(5)
    .toString()
    .split("")
    .slice(2)
    .join("");

  const paymentMethod: PaymentProps[] = [
    {
      id: singleId,
      icon: <CreditCard size={24} />,
      label: "cartão de crédito",
    },
    {
      id: singleId,
      icon: <Money size={24} />,
      label: "cartão de débito",
    },
    {
      id: singleId,
      icon: <Bank size={24} />,
      label: "dinheiro",
    },
  ];

  useEffect(() => {}, [dataCep]);
  async function fetchApi(cep: string) {
    const header = {
      headers: {
        Accept: "application/json",
      },
    };

    const response = await axios.get(`http://cep.la/${cep}`, header);

    setDataCep(() => response.data);
    console.log(response.data);
  }

  function handlePayment(element: any) {
    const findId = paymentMethod.filter((param) => param.id !== element.id);

    console.log(findId, "aqui");
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
            value={dataCep.cep}
            placeholder="CEP"
            required
            onChange={({ target }) => fetchApi(target.value)}
          />

          <input
            type="text"
            id="cep"
            name="cep"
            value={dataCep.logradouro}
            placeholder="Rua"
            disabled
          />

          <div>
            <input
              type="text"
              id="cep"
              name="cep"
              // value={dataCep.bairro}
              placeholder="Número"
              required
            />
            <input
              type="text"
              id="cep"
              name="cep"
              // value={dataCep.cidade}
              placeholder="Complemento (opcional)"
            />
          </div>

          <div>
            <input
              type="text"
              id="cep"
              name="cep"
              value={dataCep.bairro}
              placeholder="Bairro"
              disabled
            />
            <input
              type="text"
              id="cep"
              name="cep"
              value={dataCep.cidade}
              placeholder="Cidade"
              disabled
            />
            <input
              type="text"
              id="cep"
              name="cep"
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
          {paymentMethod.map((item) => {
            return (
              <PaymentButton>
                {item.icon}
                <input
                  key={item.label}
                  type="radio"
                  onClick={() => handlePayment(item)}
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
