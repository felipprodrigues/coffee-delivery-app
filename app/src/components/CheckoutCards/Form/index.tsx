import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { Card } from "../styles";
import { CardBlock, CardPaymentMethod, PaymentButton } from "./styles";

import { getCepApi } from "../../../hooks/useGetApi";

interface PaymentProps {
  icon: JSX.Element;
  label: string;
}

export function FormCard() {
  const paymentMethod: PaymentProps[] = [
    {
      icon: <CreditCard size={24} />,
      label: "cartão de crédito",
    },
    {
      icon: <Money size={24} />,
      label: "cartão de débito",
    },
    {
      icon: <Bank size={24} />,
      label: "dinheiro",
    },
  ];

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
              <PaymentButton key={item.label}>
                {item.icon}
                <span>{item.label}</span>
              </PaymentButton>
            );
          })}
        </CardPaymentMethod>
      </CardBlock>
    </Card>
  );
}
