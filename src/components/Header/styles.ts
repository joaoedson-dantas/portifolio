import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 0;  
  font-family: 'DM Sans', sans-serif;
  margin-top: 2rem;


  ul {
    display: flex;
    gap: 2rem;
  }

  ul, li {
    font-size: 1.3125rem;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;
  }

  .gitLogo a:hover {
    color: ${props => props.theme.secondary}
  }
  
`