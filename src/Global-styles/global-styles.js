import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: var(--primary-font);
    box-sizing: border-box;
  }

  h1 {
    font-size: 50px;
  }

  h2 {
    font-size: 40px;
  }

  a {
    text-decoration: none;
    font-size: 20px;
    color: black;
  }

  .boxshadow {
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  .borderRadius {
    border-radius: 10px;
  }

  .rounded {
    border-radius: 100%;
  }

  .bordes{
    border: 1px solid red;
  }
`

export default GlobalStyles
