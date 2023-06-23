import styled from "styled-components";

export const CardBlock = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme["base-200"]};
  border-radius: 6px;
  padding: 2.5rem;

  div#blockData {
    display: flex;
    gap: 1rem;

    svg#blockSvgLight {
      color: ${(props) => props.theme["primary-500"]};
    }

    svg#blockSvgDark {
      color: ${(props) => props.theme["secondary-500"]};
    }

    span {
      color: ${(props) => props.theme["base-800"]};
      font-size: ${(props) => props.theme["font-s"]};
      line-height: 130%;

      p {
        font-size: ${(props) => props.theme["font-m"]};
        line-height: 1.5rem;
      }
    }
  }
`;

export const CardPaymentMethod = styled.div`
  display: grid;
  padding: 2rem 0 0;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export const PaymentButton = styled.div`
  display: flex;
  align-items: center;

  padding: 1rem;
  gap: 1rem;

  border-radius: 6px;
  background-color: ${(props) => props.theme["base-400"]};
  cursor: pointer;
  transition: all 0.15s linear;

  svg {
    color: ${(props) => props.theme["secondary-500"]};
  }

  span {
    text-transform: uppercase;
    font-size: ${(props) => props.theme["font-xs"]};
    color: ${(props) => props.theme["base-700"]};
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
