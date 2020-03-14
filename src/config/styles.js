import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

*,
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    
  body {
    font-family: "Open Sans", "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;