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
export const primaryFooter = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;

    background: ${theme.colors.footerPrimaryColor};
    align-items: center;
    justify-content: space-around;
  `}
`;

export const secundaryFooter = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;

    background: ${theme.colors.footerSecundaryColor};

    p {
      width: 100%;
      color: ${theme.colors.text};
      font-family: ${theme.constants.headingFontFamily};
      font-size: 0.7rem;
      font-weight: 400;
      text-align: center;
    }
  `}
`;
export const divFooter = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 25%;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;

    h5 {
      color: ${theme.colors.text};
      font-family: ${theme.constants.textInitialFontFamily};
      font-weight: 800;
      font-size: 1rem;
    }
    p {
      color: ${theme.colors.text};
      font-family: ${theme.constants.textInitialFontFamily};
      font-weight: 500;
      font-size: 0.8rem;
      margin-top: -2rem;
      transition: ease 0.5s;
    }
    p:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  `}
`;
export const content = styled.main`
  display: flex;
  min-width: 100%;
  align-items: center;
  justify-content: center;

  height: 100vh;
  flex-direction: column;
`;

export const text1 = styled.p`
  ${({ theme }) => css`
    display: flex;

    color: ${theme.colors.text};
    font-family: ${theme.constants.textInitialFontFamily};
    font-size: 200%;
    margin: 0;
    font-weight: 600;
    margin-bottom: -3rem;
  `}
`;

export const text2 = styled.p`
  ${({ theme }) => css`
    display: flex;

    font-size: 330%;
    color: ${theme.colors.text};
    font-family: ${theme.constants.textInitialFontFamily};
    font-weight: 800;
    text-align: center;
  `}
`;

export const text3 = styled.p`
  ${({ theme }) => css`
    margin: 0;
    width: 50%;
    display: flex;

    margin-top: -2rem;
    text-align: center;
    color: ${theme.colors.text};
    font-family: ${theme.constants.textFinalFontFamily};
    font-weight: 400;
  `}
`;
