import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  #root {
    width: 100%;
    height: 100vh;
    min-width: 100%;

    display:flex;
    flex-direction: column;
    align-items: center;
    
  }

  button {
    cursor: pointer;

    border: none;
  }

  ul, ol {
    list-style: none;
  }

  input {
    border: none;
  }
`