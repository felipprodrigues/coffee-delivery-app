import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["primary-500"]}
  }

  body {
    background-color: ${(props) => props.theme["base-100"]};
    color: ${(props) => props.theme["gray-300"]};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
  }

  input,
  textarea,
  button,
  span,
  p,
  a {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Baloo 2', cursive;
  }
`;

export const Container = styled.div`
  padding: 2.5rem 0;
`;
