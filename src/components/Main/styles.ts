import { styled } from "styled-components";

export const MainContainer = styled.main`
  height: calc( 100vh  - 10rem);

  display: grid;
  align-content: end;
  align-items: end;
  gap: 6rem 0rem;
  grid-template-columns: 1fr 2fr;

  

  h1 {
    width: 22.5rem;
    color: ${props => props.theme.mainBlack};
    font-family: 'DM Sans', sans-serif;
    font-size: 3.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 97.2%; /* 3.645rem */
    letter-spacing: -0.1125rem;
    margin-bottom: 2rem;
  }

  p {
    font-family: 'DM Sans', sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 117%; /* 2.34rem */
    letter-spacing: -0.06rem;
    color: ${props => props.theme.mainGray};

  }

`