import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *::after, *::before {
    box-sizing: inherit;
  }
  body {
    font-family: 'Red Hat Display', sans-serif;
  }
  a, button {
    font-family: 'Red Hat Display', sans-serif;
  }
`;