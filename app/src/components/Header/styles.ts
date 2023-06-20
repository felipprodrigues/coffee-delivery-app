import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    gap: 1.5rem;
  }
`;

export const HeaderLabel = styled.div`
  padding: 0.75rem 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;
  transition: all 0.07s linear;

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
