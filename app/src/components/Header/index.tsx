/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  HeaderContainer,
  HeaderLabel,
  HeaderShoppingCartCounter,
} from "./styles";

import Logo from "../../assets/Logo.png";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProductsCount } from "../../redux/cart/cart.selectors";

export function Header() {
  const { dataCep } = useSelector((state: any) => state.FormReducer);

  const location = useLocation();

  const productsCount = useSelector(selectProductsCount);

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} />
      </NavLink>

      <div>
        {location.pathname === "/checkout" && (
          <HeaderLabel>
            <MapPin size={24} />
            {!dataCep ? null : (
              <span>
                {dataCep.localidade}
                {dataCep.uf && `, ${dataCep.uf}`}
              </span>
            )}
          </HeaderLabel>
        )}

        {location.pathname !== "/success" && (
          <NavLink to="/checkout" title="Checkout">
            <HeaderLabel>
              <ShoppingCart size={24} />
              <HeaderShoppingCartCounter>
                {productsCount}
              </HeaderShoppingCartCounter>
            </HeaderLabel>
          </NavLink>
        )}
      </div>
    </HeaderContainer>
  );
}
