import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
  font-family: 'Open Sans Condensed';
}

a {
  text-decoration: none;
  color: #171717;
}

* {
  box-sizing: border-box;
}

`;

export default GlobalStyle;
