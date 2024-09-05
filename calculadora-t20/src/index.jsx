import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Importa o CSS personalizado (que inclui o Bootstrap)
import './scss/styles.scss';

// Importa todo o JavaScript do Bootstrap
import * as bootstrap from 'bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

