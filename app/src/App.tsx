/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
//* Routing
import { BrowserRouter } from "react-router-dom";

import { Router } from "./Router";

//* Redux
import { Provider } from "react-redux";
import store from "./redux/store";

//* Themes
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/default";
import { GlobalStyle } from "./styles/global";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer position="top-left" autoClose={2000} />

      {/* REDUX */}
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>

        <GlobalStyle />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
