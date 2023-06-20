import { HeaderContainer, HeaderLabel } from "./styles";

import Logo from "../../assets/Logo.png";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} />

      <div>
        <HeaderLabel>
          <MapPin size={24} />
          <span>Bauru, SP</span>
        </HeaderLabel>

        <HeaderLabel>
          <ShoppingCart size={24} />
        </HeaderLabel>
      </div>
    </HeaderContainer>
  );
}
