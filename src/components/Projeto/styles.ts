
import { styled } from 'styled-components';

export const ProjetoContainer = styled.div`



  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: 8rem;
  padding-bottom: 8rem;
  border-bottom: 2px solid ${props => props.theme.mainBlack};


  .infoContainer {
    display: flex;
    flex-direction: column;
    gap: 10rem;

  }

  .descriptionProjeto h3 {
    margin-bottom: 1.5rem;
  }
  .descriptionProjeto h4 {
    margin-bottom: 2rem;
  }

  .descriptionProjeto h3, h4 {
    font-family: 'Inter';
    font-size: 1.125rem;
    font-style: normal;
    line-height: 121.5%; /* 1.36688rem */
    letter-spacing: -0.03375rem;
    color: ${props => props.theme.mainBlack}
  }

  .descriptionProjeto h3 {
    font-weight: 500;
  }
  .descriptionProjeto h4 {
    font-weight: 400;
  }

  .descriptionProjeto p {
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 121.5%; /* 1.06313rem */
    letter-spacing: -0.02625rem;
    color: ${props => props.theme.mainGray}

  }
  
  .linksProjeto a {
    margin-right: 2rem;
    font-family: 'Inter';
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 121.5%; /* 1.36688rem */
    letter-spacing: -0.03375rem;
    text-decoration-line: underline;
    color: ${props => props.theme.mainBlack};
  }

`