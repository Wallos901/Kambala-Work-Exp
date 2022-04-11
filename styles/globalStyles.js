import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    font-family: "Montserrat", Arial, sans-serif;
  }
  body {
    background-color: #343434;
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6, p, a {
    color: #ffffff;
  }
`;
