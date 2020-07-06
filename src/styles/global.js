import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    height: 100%;
    min-height: 100%;
    font-family:  Roboto,Arial, Helvetica, sans-serif;
    text-rendering: optimizelegibility !important;
    -webkit-font-smoothing: antialiased !important;
    letter-spacing: 0.3px;
  }
  ul{
    list-style:none;
  }
#root{
  width: 100%;
}

  body{
    background: #121212;
    color: #fff;
    display: flex;
    justify-content: center;
  }

  a{
    text-decoration: none;
  }

  button{
    cursor:pointer;
  }

  input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`;
