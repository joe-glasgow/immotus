import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { StylesProvider } from '@mui/styles';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import theme from '@/theme/theme';
import { Wrapper, StyledFooter, StyledPaper } from '@/components/organisms/page/App.styles';

const globalPageStyles = {
  body: {
    margin: 0,
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif`,
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },
  'body, #app, html': { height: '100%' },
};

const App: FC = ({ children }) => (
  <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={globalPageStyles} />
      <Wrapper>
        <Stack>
          <header>
            <Typography variant="h1">Immotus</Typography>
            <Typography variant="subtitle2"><i>-beta</i></Typography>
          </header>
          <StyledPaper elevation={1}>
            {children}
          </StyledPaper>
          <StyledFooter><Typography variant="subtitle1">v0.0.0-beta.1</Typography></StyledFooter>
        </Stack>
      </Wrapper>
    </ThemeProvider>
  </StylesProvider>
);

export default App;
