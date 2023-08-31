import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;

    /* border: 1px solid green; */
  }

  /* font-size: 16px; (Desktop) */
  html {
    @media (max-width: 1000px){
      font-size: 93.75%; //16 x 0,975 = 15 pixels
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //16 x 0,875 = 14px
    }
  }

  body {
    background-color: ${(props) => props.theme.backgroundColor};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, strong {
    font-weight: 900;
  }

   button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
