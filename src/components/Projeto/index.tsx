import { ArrowUpRight } from "@phosphor-icons/react";
import { ProjetoContainer } from "./styles";

import img1 from '../../../public/lescone.jpg'
import img2 from '../../../public/dogs.jpg'


interface PorjetoProps {
  name: string;
  description: string;
  staks: string;
  links: {
    deploy: string;
    git: string;
  };

}

export function Projeto({name, description, links, staks}:PorjetoProps) {

  return (
  <ProjetoContainer >
    <div className="infoContainer">
      <div className="descriptionProjeto">
        <h3>{name}</h3>
        <h4>{description}</h4>
        <p>{staks}</p>
      </div>
      <div className="linksProjeto">
        <a href={links.deploy}>Ver site <ArrowUpRight size={14} /></a>
        <a href={links.git}>Ver código <ArrowUpRight size={14} /></a>
      </div>
    </div>
    <div>
      <img src={name === '03 / Dogs - Rede social para cachorro' ? img2 : img1 } alt="" />
    </div>
  </ProjetoContainer>
  ) 
}