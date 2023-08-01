import styled from "styled-components";

export const BannerContainer = styled.div`
  gap: 1rem;
  padding: 2.5rem 0;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr auto;
  }
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;

export const BannerTags = styled.div`
  display: grid;
  grid-gap: 1.5rem;

  & div {
    @media (min-width: 1599px) {
      max-width: 70%;
    }

    @media (min-width: 1024px) {
      max-width: 85%;
    }
    max-width: 100%;
  }

  & > div:first-child {
    width: 100%;
  }

  & > div:first-child h1 {
    font-size: ${(props) => props.theme["title-xl"]};
    line-height: 130%;
    margin-bottom: 1rem;

    @media (max-width: 1023px) {
      text-align: center;
      max-width: 100%;
    }
  }

  & > div:first-child span {
    font-size: ${(props) => props.theme["font-l"]};
    color: ${(props) => props.theme["base-800"]};
    display: inline-block;
    width: 100%;
    line-height: 130%;

    @media (max-width: 1023px) {
      text-align: center;
      max-width: 85%;
    }
    max-width: 100%;
  }

  & > div:last-child {
    display: grid;
    grid-gap: 0.75rem;
    grid-template-columns: repeat(2, 1fr);
  }

  & > div:last-child div {
    display: flex;
    align-items: center;
    grid-gap: 0.75rem;

    @media (max-width: 1023px) {
      justify-content: center;
    }
  }

  & > div:last-child div span {
    color: ${(props) => props.theme["base-700"]};
    display: inline-block;
    line-height: 130%;

    @media (min-width: 1023px) {
      font-size: ${(props) => props.theme["font-m"]};
    }
    font-size: ${(props) => props.theme["font-s"]};
  }
`;

interface BannerProps {
  bgColor: string;
}

export const BannerFlag = styled.div<BannerProps>`
  padding: 0.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};

  & svg {
    color: ${(props) => props.theme.white};
  }
`;
