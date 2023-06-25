import styled from "styled-components";

export const SuccessCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px;

  border-radius: 6px 36px 6px 36px;
  border: 1px solid gradient;

  position: relative;
  background: linear-gradient(
    to left,
    ${(props) => props.theme["primary-100"]},
    #d53a9d
  );

  & > div {
    background-color: ${(props) => props.theme["base-100"]};
    border-radius: 6px 34px 6px 34px;
    padding: 1.5rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const SuccessSteps = styled.div`
  display: flex;
  gap: 1rem;

  & > div:first-of-type {
    background-color: ${(props) => props.bgColor};
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;

    svg {
      color: ${(props) => props.theme.white};
    }
  }

  & > div:last-of-type {
    display: flex;
    flex-direction: column;
  }
`;
