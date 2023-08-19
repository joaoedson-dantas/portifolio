import { ArrowBendLeftDown } from "@phosphor-icons/react";
import { MainContainer } from "./styles";

export function Main() {
  return <MainContainer>
    <h1>Frontend Developer</h1>
    <p>Oi. Me chamo João Edson. Sou desenvolvedor frontend com especialidade em React.Js. Possuo +1 de ano de experiência trabalhando como freelancer. Localizado em Fortaleza, Brasil 🏖 </p>
    <a href="" className="arrow">
     <ArrowBendLeftDown size={42} /> 
    </a>
  </MainContainer> 
}