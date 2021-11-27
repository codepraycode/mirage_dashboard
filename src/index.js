import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.scss';
import App from './App';
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('app')
);


