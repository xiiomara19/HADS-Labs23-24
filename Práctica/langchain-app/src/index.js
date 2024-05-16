import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Settings from './settings';
import Info from './info';
import Statistics from './statistics';

const root = ReactDOM.createRoot(document.getElementById('root'));

function renderApp() {
  root.render(
      <App />
  );
}
renderApp();

reportWebVitals();
