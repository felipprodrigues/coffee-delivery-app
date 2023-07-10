import styled from "styled-components";

export const SuccessHolder = styled.div`
  & > span {
    font-size: ${(props) => props.theme["font-l"]};
    color: ${(props) => props.theme["base-800"]};
  }

  & > span > h1 {
    color: ${(props) => props.theme["primary-500"]};
    font-size: ${(props) => props.theme["title-l"]};
  }
`;

export const SuccessCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  padding: 2px;

  border-radius: 6px 36px 6px 36px;
  border: 1px solid gradient;

  position: relative;
  background: linear-gradient(
    to right,
    ${(props) => props.theme["primary-100"]},
    ${(props) => props.theme["secondary-100"]}
  );

  & > div {
    background-color: ${(props) => props.theme["base-100"]};
    border-radius: 6px 34px 6px 34px;
    padding: 1.5rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;
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
    width: 40px;
    height: 40px;

    svg {
      color: ${(props) => props.theme.white};
    }
  }

  & > div:last-of-type {
    display: flex;
    flex-direction: column;

    & > span {
      font-size: ${(props) => props.theme["font-m"]};
      color: ${(props) => props.theme["base-700"]};
    }
  }
`;

export const SuccessImageHolder = styled.div`
  display: flex;
  align-items: flex-end;
`;
