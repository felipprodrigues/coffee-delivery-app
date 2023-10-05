/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";

import { Main } from "../components/CheckoutCards/styles";
import { Container } from "../styles/global";
import SuccessIllustration from "../assets/successIllustrations.png";
import {
  SuccessCard,
  SuccessHolder,
  SuccessImageHolder,
  SuccessSteps,
} from "../components/Success/styles";

import { successStatus } from "../constants";

export function Success() {
  const { paymentMethod, address, neighbourhood, city, state } = useSelector(
    (state: any) => state.OrderReducer.finalOrder
  );

  return (
    <Container>
      <Main>
        <SuccessHolder>
          <span>
            <h1>Uhu! Pedido Confirmado</h1>
            Agora é só aguardar que logo o café chegará até você
          </span>
          {/* {!loading ? ( */}
          <SuccessCard>
            <div>
              {successStatus.map((item: any, index: number) => (
                <SuccessSteps color={item.bgColor}>
                  <div>{item.icon}</div>
                  {index === 0 ? (
                    <div>
                      <span>
                        {item.msg}
                        <span>
                          <b>{address}</b>
                        </span>
                      </span>
                      <span>
                        {neighbourhood} - {city}, {state}
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
                            <b>{paymentMethod}</b>
                          </span>
                        </span>
                      )}
                    </div>
                  )}
                </SuccessSteps>
              ))}
            </div>
          </SuccessCard>
          {/* ) : null} */}
        </SuccessHolder>

        <SuccessImageHolder>
          <img src={SuccessIllustration} />
        </SuccessImageHolder>
      </Main>
    </Container>
  );
}
