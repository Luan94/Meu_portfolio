import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

html {
  scroll-behavior: smooth;
}


// *{
//   outline: 1px dotted red !important;
// }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif; /* Definindo Roboto como a fonte do corpo */
    margin: 0;
    background: rgb(0,0,0);
    background: linear-gradient(-175deg, rgba(0,0,0,1) 40%, rgba(30,30,30,1) 140%);
    background-size: 120% 120%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif; /* Definindo Montserrat para headers */
    /* Adicione outros estilos de fonte, tamanho, etc., conforme necessário */
  }

  p {
    /* Estilos de fonte para parágrafos */
  }

  a{
    text-decoration: none;
  }
`;

export default GlobalStyles;
