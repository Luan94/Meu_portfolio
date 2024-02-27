import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

html {
  scroll-behavior: smooth;
}


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif; /* Definindo Roboto como a fonte do corpo */
    margin: 0;
    background-color: black;
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
