import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', Helvetica, Arial,sans-serif;
    
  }

  img {
    box-sizing:  border-box;
    max-width: 100%;
  }

  ul, li, a {
    text-decoration: none;
    list-style: none;
    
  }
`;

export default GlobalStyles;
