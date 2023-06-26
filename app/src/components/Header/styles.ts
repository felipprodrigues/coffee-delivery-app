import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    gap: 1.5rem;
  }

  & > a > img {
    transition: all 0.15s linear;
  }

  & > a > img:hover {
    transform: scale(0.9);
  }
`;

export const HeaderLabel = styled.div`
  padding: 0.75rem 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;
  transition: all 0.07s linear;
  position: relative;

  &:first-child {
    background-color: ${(props) => props.theme["secondary-100"]};
    color: ${(props) => props.theme["secondary-500"]};

    svg {
      color: ${(props) => props.theme["secondary-500"]};
    }
  }

  &:last-child {
    background-color: ${(props) => props.theme["primary-100"]};
    cursor: pointer;
  }
  &:last-child:hover {
    background-color: ${(props) => props.theme.primary};
  }
`;

export const HeaderShoppingCartCounter = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  height: 30px;
  width: 30px;

  background-color: ${(props) => props.theme["primary-500"]};
  color: ${(props) => props.theme.white};
  font-size: ${(props) => props.theme["font-s"]};

  top: -30%;
  right: -30%;
`;
