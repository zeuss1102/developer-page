// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Obtén el contenedor donde se montará la aplicación
const container = document.getElementById('root');

// Crea una raíz de React
const root = ReactDOM.createRoot(container);

// Renderiza la aplicación en la raíz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);