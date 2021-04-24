import { createGlobalStyle } from 'styled-components'

import { fonts } from './theme'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
    margin: 0;
    scroll-padding-top: 230px;
    scroll-behavior: smooth;
    font-family: ${fonts.textFamily};
  }

  /* set textFamily as default font for this tags */
  p, h1, h2, h3, h4, h5, h6, a,
  li, button, input, textarea, label {
    font-family: ${fonts.textFamily};
  }

  .tooltip {
    max-width: 95%;
    border-radius: 18px !important;
    font-family: ${fonts.textFamily};
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    margin-left: 6px !important;
  }

  .tooltip:after {
    border: none !important;
  }

  @media (max-width: 768px) {
    .tooltip {
      opacity: 1 !important;
      margin-left: unset !important;
    }
  }

  @media (min-width: 976px) {
    html,
    body,
    #root {
      scroll-padding-top: 72px;
    } 
  }
`

export default GlobalStyle
