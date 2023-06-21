import { Route, Routes } from "react-router-dom";

import { Checkout } from "./pages/checkout.tsx";
import { Success } from "./pages/success.tsx";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  );
}
