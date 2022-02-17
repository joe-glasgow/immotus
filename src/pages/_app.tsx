import React, {FC} from "react";
import {ThemeProvider} from 'styled-components';
import {StylesProvider} from '@mui/styles';
import theme from "@/theme/theme";
import {Wrapper, StyledFooter, StyledPaper} from "@/components/organisms/page/App.styles";
import {AppBar, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";


const App: FC = ({children}) => {
    return (<StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
                <Wrapper>
                    <Stack>
                        <header><Typography variant="h1">Immotus</Typography><Typography variant="subtitle2"><i>-beta</i></Typography></header>
                        <StyledPaper elevation={1}>
                            {children}
                        </StyledPaper>
                        <StyledFooter><Typography variant="subtitle">v0.0.0-beta.1</Typography></StyledFooter>
                    </Stack>
                </Wrapper>
            </ThemeProvider>
        </StylesProvider>
    );
}

export default App
