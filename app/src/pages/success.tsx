import { Main } from "../components/CheckoutCards/styles";
import { Container } from "../styles/global";

import SuccessIllustration from "../assets/successIllustrations.png";
import {
  SuccessCard,
  SuccessHolder,
  SuccessImageHolder,
  SuccessSteps,
} from "../components/Success/styles";
import { ReactElement, useContext } from "react";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { CartContext } from "../App";

interface StatusProps {
  icon: ReactElement;
  msg: string;
  bgColor: string;
}

export function Success() {
  const { finalOrder, loading } = useContext(CartContext);
  // console.log(finalOrder.address, "aqui com conteudo");
  console.log(finalOrder, "aqui ");

  const status: StatusProps = [
    {
      icon: <MapPin size={24} />,
      msg: "Entrega em ",
      status: "",
      bgColor: "#8047F8",
    },
    {
      icon: <Timer size={24} />,
      msg: "Previsão de entrega",
      status: "20 min - 30 min",
      bgColor: "#dbac2c",
    },
    {
      icon: <CurrencyDollar size={24} />,
      msg: "Pagamento na entrega",
      // msg: finalOrder.address.formaPagamento,
      bgColor: "#c47f17",
    },
  ];

  return (
    <Container>
      <Main>
        <SuccessHolder>
          <span>
            <h1>Uhu! Pedido Confirmado</h1>
            Agora é só aguardar que logo o café chegará até você
          </span>
          {!loading ? (
            <SuccessCard>
              <div>
                {status.map((item: any, index: number) => (
                  <SuccessSteps bgColor={item.bgColor}>
                    <div>{item.icon}</div>
                    {index === 0 ? (
                      <div>
                        <span>
                          {item.msg}
                          <span>
                            <b>{finalOrder.address.logradouro}</b>
                          </span>
                        </span>
                        <span>
                          {finalOrder.address.bairro} -{" "}
                          {finalOrder.address.cidade}, {finalOrder.address.uf}
                        </span>
                      </div>
                    ) : (
                      <div>
                        <span>{item.msg}</span>
                        {index === 1 ? (
                          <span>
                            <span>
                              <b>{item.status}</b>
                            </span>
                          </span>
                        ) : (
                          <span>
                            <span>
                              <b>{finalOrder.address.metodoPagamento}</b>
                            </span>
                          </span>
                        )}
                      </div>
                    )}
                  </SuccessSteps>
                ))}
              </div>
            </SuccessCard>
          ) : null}
        </SuccessHolder>

        <SuccessImageHolder>
          <img src={SuccessIllustration} />
        </SuccessImageHolder>
      </Main>
    </Container>
  );
}
