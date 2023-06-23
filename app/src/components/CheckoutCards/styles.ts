import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 2rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 2.5rem 0;

  h3 {
    font-size: ${(props) => props.theme["title-xs"]};
  }
`;
