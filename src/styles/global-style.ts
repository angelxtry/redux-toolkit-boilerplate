import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { primaryFont } from './typography';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;700&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    font-family: ${primaryFont};
  }

  a:hover { 
    text-decoration: none; 
  } 
`;
