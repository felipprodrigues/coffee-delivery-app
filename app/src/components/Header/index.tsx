import { HeaderContainer, HeaderLabel } from "./styles";

import Logo from "../../assets/Logo.png";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Link, NavLink } from "react-router-dom";
import { Success } from "../../pages/Success";

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
          <NavLink to="/checkout" title="Checkout">
            <ShoppingCart size={24} />
          </NavLink>
        </HeaderLabel>
      </div>
    </HeaderContainer>
  );
}
