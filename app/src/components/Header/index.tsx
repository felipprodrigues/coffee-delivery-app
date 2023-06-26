import {
  HeaderContainer,
  HeaderLabel,
  HeaderShoppingCartCounter,
} from "./styles";

import Logo from "../../assets/Logo.png";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../App";

export function Header() {
  const { cartItemsAmount } = useContext(CartContext);

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
            <HeaderShoppingCartCounter>
              {cartItemsAmount}
            </HeaderShoppingCartCounter>
          </HeaderLabel>
        </NavLink>
      </div>
    </HeaderContainer>
  );
}
