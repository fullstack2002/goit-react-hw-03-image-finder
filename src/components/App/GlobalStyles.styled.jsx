import { css } from '@emotion/react';

const GlobalStyles = css`
  html {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    color: #212121;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,
  h2 {
    font-size: 42px;
    font-weight: 900;
    margin-top: 0px;
    margin-bottom: 20px;
  }
  h3,
  h4,
  h5,
  p {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  ul,
  ol {
    list-style: none;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-left: 0px;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  a {
    text-decoration: none;
  }
  input {
    padding: 0;
  }
`;

export { GlobalStyles};