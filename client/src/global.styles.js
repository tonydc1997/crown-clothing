import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
  font-family: 'Open Sans';
  background-image: linear-gradient(to bottom, #fcfcfd, #fafafc, #f7f8fb, #f4f7f9, #f1f5f8);
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
