import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme;

// criando uma tipagem para o módulo styled
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}