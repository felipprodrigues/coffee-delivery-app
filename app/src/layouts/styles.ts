import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: calc(100% - 20rem);
  height: 100vh;
  margin: auto;
  padding: 2.5rem 0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme["base-100"]};

  display: flex;
  flex-direction: column;
`;
