import styled, { css } from "styled-components";

import startpage from "../../assets/images/StartPage.png";
export const startpages = styled.section`
  ${({ theme }) => css`
    background-image: url(${startpage});
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    min-width: vw;
    font-family: ${theme.constants.fontFamily};
  `}
`;
export const header = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    background-color: ${theme.colors.primaryColors};
    align-items: center;
    justify-content: center;
  `}
`;
export const iconConfig = styled.div`
  ${({ theme }) => css`
    width: 65%;

    p {
      color: ${theme.colors.text};
      text-align: center;
      font-family: ${theme.constants.headingFontFamily};
      font-weight: 600;
    }
  `}
`;
export const heading = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    background-color: ${theme.colors.primaryColors};
    align-items: center;
    justify-content: center;
  `}
`;
