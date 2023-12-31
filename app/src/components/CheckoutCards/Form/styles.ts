import styled from "styled-components";

export const CardBlock = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme["base-200"]};
  border-radius: 6px;

  padding: 1rem;

  @media (min-width: 1024px) {
    padding: 2.5rem;
  }

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

  & > a#confirmOrder {
    text-decoration: none;
  }

  form {
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
      display: grid;
    }
    padding: 2rem 0 0;

    grid-gap: 1rem;

    input {
      border-radius: 6px;
      border: none;
      padding: 0.75rem;
      background-color: ${(props) => props.theme["base-300"]};
      color: ${(props) => props.theme["base-600"]};
      font-size: ${(props) => props.theme["font-s"]};
    }

    input:first-of-type {
      @media (min-width: 1024px) {
        max-width: 200px;
      }
      width: 100%;
    }

    div {
      display: grid;
      grid-gap: 1rem;
    }

    div:first-of-type {
      display: flex;
      flex-direction: column;

      @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: 200px auto;
      }
    }

    div:last-of-type {
      display: flex;
      flex-direction: column;

      @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: 200px auto 60px;
      }
    }
  }
`;

export const CardPaymentMethod = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;

  @media (min-width: 1024px) {
    display: grid;
    padding: 2rem 0 0;
    grid-template-columns: repeat(3, 1fr);
    /* gap: 1rem; */
  }
`;

export const PaymentButton = styled.label`
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

  input {
    display: none;
  }

  &.isChecked {
    outline: none;
    box-shadow: 0 0 2px 1px ${(props) => props.theme["secondary-500"]};
  }
`;
