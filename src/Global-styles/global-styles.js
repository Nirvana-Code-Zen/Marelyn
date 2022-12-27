import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap");

:root {
  --primary-color: #a78d48;

  --primary-font: "Nanum Gothic", sans-serif;
}

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

h4 {
  font-size: 30px;
}

a {
  text-decoration: none;
  font-size: 20px;
  color: black;
}

form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 25px;
}

input[type='text'], input[type='password'] {
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid var(--primary-color);
  box-shadow: 0 0 3px 1px var(--primary-color);
  font-size: 1.1rem;
  outline: none;
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
`

export default GlobalStyles
