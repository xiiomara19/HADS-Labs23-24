import logo from './icons/logo.svg';
import './styles/App.css';

function App(onClose) {
  return (
    <div class="App-page">
      <div class="App-title">
        Ajustes
        <button class="App-button-close" onClick={onClose}>
        ✖
        </button>
      </div>
      <div className="App-settings">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h3>Proximamente</h3>
      </div>
    </div>
    
  );
}

export default App;