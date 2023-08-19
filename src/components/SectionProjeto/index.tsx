import { Projeto } from "../Projeto";
import { SectionContainer } from "./styles";
const projetos = [
  {
    name: '01 / Economizze - Finanças Pessoais',
    description: 
    'O Economizze é um aplicativo da Web responsivo que pode ser usado como controle de orçamento mensal.',
    staks: 'Feito em javascript vanilla, html, css, flexbox, e para reposividade foi utilizado o médias queres',
    links: {
      deploy: 'https://joaoedson-dantas.github.io/economizze-app/#',
      git: 'https://github.com/joaoedson-dantas/economizze-app'
    }

  },
  {
    name: '02 / Pomodoro APP - Gerencie seu tempo',
    description: 
    'O pomodoro é aplicativo da Web responsivo que pode ser usado como controle e gestão de tempo.',
    staks: 'Feito em javascript vanilla, html, css, flexbox, e para reposividade foi utilizado o médias queres',
    links: {
      deploy: 'https://joaoedson-dantas.github.io/economizze-app/#',
      git: 'https://github.com/joaoedson-dantas/economizze-app'
    }
  },
  {
    name: '03 / Dogs - Rede social para cachorro',
    description: 
    'Uma rede social completa',
    staks: 'Feito em javascript vanilla, html, css, flexbox, e para reposividade foi utilizado o médias queres',
    links: {
      deploy: 'https://joaoedson-dantas.github.io/economizze-app/#',
      git: 'https://github.com/joaoedson-dantas/economizze-app'
    }
  }
];


interface projetos {
  name: string;
  description: string;
  staks: string;
  links: {
    deploy: string;
    git: string;
  };
}


export function SectionProjeto() {
  return <SectionContainer>
    {projetos.map((projeto) => {
      return  <Projeto key={projeto.name} {...projeto}/>
    })}
  
  </SectionContainer>
}