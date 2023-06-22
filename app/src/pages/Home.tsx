import { Container } from "../styles/global";
import { Banner } from "../components/Banner";
import { Main } from "../components/Main";

export function Home() {
  return (
    <Container>
      <Banner />

      <Main />
    </Container>
  );
}
