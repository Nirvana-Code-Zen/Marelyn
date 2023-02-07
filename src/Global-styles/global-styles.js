import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    box-sizing: border-box;
  }

  h1 {
    font-size: 55px;
  }

  h2 {
    font-size: 45px;
  }

  span{
    display: inline-block;
  }

  a {
    text-decoration: none;
    color: black;
  }

  p{
    font-size:18px;
  }
  .boxshadow {
    box-shadow:0 4px 7px 4px rgb(0 0 0 / 10%), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  .borderRadius {
    border-radius: 10px;
  }

  .rounded {
    border-radius: 100%;
  }

  .bar {
  position: relative;
  display: block;
  width: 260px;
}

  .label-char {
    transition: 0.2s ease all;
    transition-delay: calc(var(--index) * 0.04s);
    
  }
  .focused .label-char {
    transform: translateY(-20px); /* o cualquier estilo que desees */
}

  .space_word {
    margin-right: 8px;
  }

`

export default GlobalStyles
