import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import { Header } from "../components/Header";

export function DefaultLayout() {
  return (
    <div>
      <LayoutContainer>
        <Header />

        <Outlet />

        <div id="footer"></div>
      </LayoutContainer>
    </div>
  );
}
