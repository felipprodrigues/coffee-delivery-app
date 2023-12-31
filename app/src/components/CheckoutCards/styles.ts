import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 2rem;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  padding: 2.5rem 0;

  h3 {
    font-size: ${(props) => props.theme["title-xs"]};
  }
`;
