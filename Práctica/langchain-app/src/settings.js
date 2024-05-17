import './styles/App.css';

function App({onClose}) {

  const handleStartOver = () => {
    window.location.reload();
  };

  document.getElementById("home").onclick = handleStartOver;

  return (
    <div className="App-page">
      <div className="App-title">
        Ajustes
        <button className="App-button-close" onClick={onClose}>
        ✖
        </button>
      </div>
      <div className="App-settings">
      <button id="startOver" className="App-button App-button-marked" onClick={handleStartOver}>Modo putada</button>
      <button id="startOver" className="App-button App-button-marked" onClick={handleStartOver}>Modo desesperacion</button>
      
      </div>
    </div>
    
  );
}

export default App;