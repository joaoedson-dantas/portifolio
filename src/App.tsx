import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header/index'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global';
import { Main } from './components/Main';
import { SectionProjeto } from './components/SectionProjeto';



function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header /> 
      <Main />
      <SectionProjeto />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App;
