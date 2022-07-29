import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    font-family: 'Jura', sans-serif;
    color: white;
    &::-webkit-scrollbar {
      display: none;
  }
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;
  }

  html {
    height: 100%;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
