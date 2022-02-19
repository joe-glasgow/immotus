import { ThemeProvider } from 'styled-components'
import { StylesProvider } from '@mui/styles'
import theme from "@/theme/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
export const decorators = [
  (Story) => (
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Story/>
        </ThemeProvider>
      </StylesProvider>
  ),
]