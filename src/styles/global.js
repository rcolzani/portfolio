import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    min-height: 100%;
    font-family: Roboto , Arial, Helvetica, sans-serif;
  }

  body{
    background: #121212;
    -webkit-font-smoothing: antialiased !important;
  }
`;
