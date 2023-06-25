import { Main } from "../components/CheckoutCards/styles";
import { Container } from "../styles/global";

import SuccessIllustration from "../assets/successIllustrations.png";
import { SuccessCard, SuccessSteps } from "../components/Success/styles";
import { ReactElement } from "react";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

interface StatusProps {
  icon: ReactElement;
  msg: string;
  bgColor: string;
}

export function Success() {
  const status: StatusProps = [
    {
      icon: <MapPin size={24} />,
      msg: "Entrega em ",
      bgColor: "#8047F8",
    },
    {
      icon: <Timer size={24} />,
      msg: "Previsão de entrega",
      bgColor: "#dbac2c",
    },
    {
      icon: <CurrencyDollar size={24} />,
      msg: "Pagamento na entrega",
      bgColor: "#c47f17",
    },
  ];

  return (
    <Container>
      <Main>
        <div>
          <span>
            <h1>Uhu! Pedido Confirmado</h1>
            Agora é só aguardar que logo o café chegará até você
          </span>

          <SuccessCard>
            <div>
              {status.map((item) => {
                return (
                  <SuccessSteps bgColor={item.bgColor}>
                    <div>{item.icon}</div>

                    <div>
                      <span>
                        {item.msg}
                        <span>
                          <b>Localização</b>
                        </span>
                      </span>
                      <span>status do form</span>
                    </div>
                  </SuccessSteps>
                );
              })}
            </div>
          </SuccessCard>
        </div>

        <div>
          <img src={SuccessIllustration} />
        </div>
      </Main>
    </Container>
  );
}
