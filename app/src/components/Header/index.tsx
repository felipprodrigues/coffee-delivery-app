import { HeaderContainer, HeaderLabel } from "./styles";

import Logo from "../../assets/Logo.png";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Link, NavLink } from "react-router-dom";
import { Success } from "../../pages/Success";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} />
      </NavLink>

      <div>
        <HeaderLabel>
          <MapPin size={24} />
          <span>Bauru, SP</span>
        </HeaderLabel>

        <NavLink to="/checkout" title="Checkout">
          <HeaderLabel>
            <ShoppingCart size={24} />
          </HeaderLabel>
        </NavLink>
      </div>
    </HeaderContainer>
  );
}
