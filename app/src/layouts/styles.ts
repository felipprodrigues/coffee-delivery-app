import styled from "styled-components";

export const LayoutContainer = styled.div`
  height: 100vh;
  margin: auto;
  padding: 2.5rem 0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme["base-100"]};

  display: flex;
  flex-direction: column;

  max-width: calc(100% - 3rem);

  @media (min-width: 768px) {
    max-width: calc(100% - 6rem);
  }

  @media (min-width: 1024px) {
    max-width: calc(100% - 20rem);
  }

  div#footer {
    padding: 2rem;
  }
`;
