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
    background: linear-gradient(-173deg, rgba(0,0,0,1) 55%, rgb(8,4,4) 80%);
    background-size: 120% 120%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif; /* Definindo Montserrat para headers */
    /* Adicione outros estilos de fonte, tamanho, etc., conforme necessário */
  }

  p {
    /* Estilos de fonte para parágrafos */
  }
`;

export default GlobalStyles;
