import { MainContainer, MainHolder } from "./styles";
import { Cards } from "../Cards";

export function Main() {
  return (
    <MainContainer>
      <h1>Nossos cafés</h1>

      <MainHolder>
        <Cards />
      </MainHolder>
    </MainContainer>
  );
}
