import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
  font-family: 'Open Sans';
  background-color: hsl(210, 36%, 99%);
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
