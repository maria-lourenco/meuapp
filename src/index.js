import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Maiusculo from './tagTudoMaiusculo/Maiusculo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Maiusculo dados="maria da conceicao henrique lourenco"/>
  </React.StrictMode>
);

reportWebVitals();
