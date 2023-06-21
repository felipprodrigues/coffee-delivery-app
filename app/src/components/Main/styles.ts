import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme["base-800"]};
    margin-bottom: 2rem;
  }
`;

export const MainHolder = styled.div`
  display: grid;
  gap: 2.5rem 1.5rem;

  grid-template-columns: 1fr;

  @media (min-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
