import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Settings from './settings';
import Info from './info';
import Statistics from './statistics';

const root = ReactDOM.createRoot(document.getElementById('root'));

function renderSettings() {
  root.render(
    <React.StrictMode>
      <Settings />
    </React.StrictMode>
  );
}
function renderStatistics() {
  root.render(
    <React.StrictMode>
      <Statistics onClose={renderApp}/>
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
    
      <App />
    
  );
}
renderApp();

document.getElementById('open-settings').addEventListener('click', renderSettings);
document.getElementById('open-about').addEventListener('click', renderInfo);
document.getElementById('open-statistics').addEventListener('click', renderStatistics);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
