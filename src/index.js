import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom';
import img from './assets/home/background-home-desktop.jpg'

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family: 'Jura', sans-serif;
    color: white;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;
    background-color: black;
    }


  html {
    height: 100%;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <GlobalStyle />
    <App />
  </Router>
);
