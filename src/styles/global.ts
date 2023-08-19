import { createGlobalStyle } from 'styled-components'



export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.mainWhite};
    max-width: 68.75rem;
    margin: 0 auto;
    padding: 0 1.25rem;
  }

  body, input, textarea, button {
    font-size: 1rem;
  }

  ul, li {
    list-style: none;
  }

  a {
    color: ${props => props.theme.mainBlack};
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }





`