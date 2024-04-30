import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Settings from './settings';
import Info from './info';

const root = ReactDOM.createRoot(document.getElementById('root'));
function renderSettings() {
  root.render(
    <React.StrictMode>
      <Settings />
    </React.StrictMode>
  );
}
function renderInfo() {
  root.render(
    <React.StrictMode>
      <Info onClose={renderApp}/>
    </React.StrictMode>
  );
}
function renderApp() {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
renderApp();

document.getElementById('open-settings').addEventListener('click', renderSettings);
document.getElementById('open-about').addEventListener('click', renderInfo);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
