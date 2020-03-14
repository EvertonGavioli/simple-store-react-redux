import { createGlobalStyle } from 'styled-components'
import { createMuiTheme } from '@material-ui/core/styles'

export const GlobalStyle = createGlobalStyle`
*,
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }
    
  body {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#019cdf'
    },
    secondary: {
      main: '#ff9800'
    }
  }
})
