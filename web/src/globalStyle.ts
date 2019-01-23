import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

export default createGlobalStyle`
  ${styledNormalize};

  html {
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  }
  *, *:before, *:after {
  box-sizing: inherit;
  }

  html, body, #root {
    display: block;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  html {
    font-size: 4px;
  background-color: #04040e;
  }

  body {
    font-size: 4rem;
  }
  `;
