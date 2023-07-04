import styled from "styled-components";

export const CardCheckout = styled.div`
  display: flex;
  flex-direction: column;

  & > div:first-of-type {
    padding-top: 0;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;

    img {
      width: 60px;
      height: 60px;
    }
  }
`;

export const CardCheckoutItem = styled.div`
  border-bottom: 2px solid ${(props) => props.theme["base-400"]};
  gap: 1rem;

  & > div:last-of-type span {
    display: flex;
  }
`;

export const CardQuantityHolder = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
`;

export const CheckoutAmount = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
  gap: 1rem;

  div {
    display: flex;
    justify-content: space-between;
  }

  & > div:not(:last-of-type) > span:first-of-type {
    font-size: ${(props) => props.theme["font-s"]};
    color: ${(props) => props.theme["base-700"]};
  }

  & > div:not(:last-of-type) > span:last-of-type {
    font-size: ${(props) => props.theme["font-m"]};
    color: ${(props) => props.theme["base-700"]};
  }

  & > div:last-of-type > span {
    font-size: ${(props) => props.theme["font-l"]};
    color: ${(props) => props.theme["base-800"]};
    font-weight: bold;
  }
`;

export const CheckoutButton = styled.button`
  background-color: ${(props) => props.theme["primary"]};
  font-size: ${(props) => props.theme["font-s"]};
  color: ${(props) => props.theme.white};
  padding: 0.75rem 0.5rem;
  transition: all 0.15s linear;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.theme["base-600"]};
  }
`;
