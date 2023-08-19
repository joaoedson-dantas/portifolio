import { GithubLogo } from '@phosphor-icons/react'
import {HeaderContainer} from './styles'

export function Header() {
  return <HeaderContainer>  
    <a className='logo'>Je.</a>
    <nav>
      <ul>
        <li><a href="">Work</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
        <li className='gitLogo'><a href="https://github.com/joaoedson-dantas" target="_blank"><GithubLogo size={28} /></a></li>
      </ul>
    </nav>
  </HeaderContainer>
}