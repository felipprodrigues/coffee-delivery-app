import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme["base-200"]};
  max-width: 275px;
  height: 310px;

  div {
    display: flex;

    div:last-child {
      display: flex;
      align-items: center;
      gap: 0.25rem;

      padding: 0.5rem;
      border-radius: 6px;
      background-color: ${(props) => props.theme["secondary-500"]};

      cursor: pointer;
      transition: all 0.07s linear;

      svg {
        color: ${(props) => props.theme.white};
      }
    }

    div:last-child:hover {
      filter: brightness(0.8);
    }
  }

  div span {
    display: flex;
    align-items: center;
    gap: 0.15rem;

    font-size: ${(props) => props.theme["font-m"]};
    color: ${(props) => props.theme["base-700"]};

    h2 {
      font-size: ${(props) => props.theme["title-m"]};
      color: ${(props) => props.theme["base-700"]};
    }
  }
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;

  h3 {
    font-size: ${(props) => props.theme["title-s"]};
    color: ${(props) => props.theme["base-800"]};
    text-align: center;
  }

  span {
    font-size: ${(props) => props.theme["font-s"]};
    color: ${(props) => props.theme["base-600"]};
    line-height: 1.125rem;
    text-align: center;
  }
`;

export const CardSelectAmount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["base-400"]};

  svg {
    color: ${(props) => props.theme["secondary-500"]};
  }
`;

export const CardImage = styled.div`
  padding: 2rem 0;
  position: relative;
  justify-content: center;

  img {
    position: absolute;

    top: -55%;
  }
`;
