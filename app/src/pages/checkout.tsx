import { CheckoutCard } from "../components/CheckoutCards/Checkout";
import { FormCard } from "../components/CheckoutCards/Form";
import { Main } from "../components/CheckoutCards/styles";

import { Container } from "../styles/global";

export function Checkout() {
  return (
    <Container>
      <Main>
        <FormCard />

        <CheckoutCard />
      </Main>
    </Container>
  );
}
