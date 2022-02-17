import {createTheme} from "@mui/material";
import { palette } from "./colors";
let theme = createTheme();
// Can now use theme.breakpoints etc in exported theme
theme = createTheme(theme, {
    palette,
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 'bold',
                    textDecoration: 'uppercase',
                },
                primary: {
                    color: palette.primary.dark,
                    background: palette.secondary.light,
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: palette.primary.dark,
                },
                subtitle2: {
                  color: palette.secondary.main,
                },
                h2: {
                    lineHeight: '1.8rem',
                    fontSize: '1.8rem',
                },
                h1: {
                    lineHeight: '2.2rem',
                    fontSize: '2rem',
                    [theme.breakpoints.up('md')]: {
                        lineHeight: '4.1rem',
                        fontSize: '4rem',
                    }
                }
            }
        }
    }
});

export default theme;