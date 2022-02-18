// styled.d.ts
import { DefaultTheme as StyledTheme } from 'styled-components';
import { DefaultTheme as MuiTheme } from '@mui/styles';

interface IPalette {
  main: string
  contrastText: string
}

declare module 'styled-components' {
  export interface DefaultTheme extends StyledTheme, MuiTheme {
    spacing: (num: number) => string
  }
}
