import './styles/App.css';

function App({onClose, onModeChange}) {

  const handleStartOver = (mode) => {
    window.location.reload();   //SI HACER RELOAD MODO = 'undefined' SIN RELOAD DA BIEN MODO
    onModeChange(mode);
    localStorage.setItem('gameMode', mode);
  };

  //document.getElementById("home").onclick = handleStartOver;

  return (
    <div className="App-page">
      <div className="App-title">
        Ajustes
        <button className="App-button-close" onClick={onClose}>
        ✖
        </button>
      </div>
      <div className="App-settings">
      <button id="startOver" className="App-button App-button-marked"  onClick={() => handleStartOver('putada')} >Modo putada</button>
      <button id="startOver" className="App-button App-button-marked" onClick={() => handleStartOver('desesperacion')}>Modo desesperacion</button>
      <button id="startOver" className="App-button App-button-marked" onClick={() => handleStartOver('normal')}>Modo normal</button>
      
      </div>
    </div>
    
  );
}

export default App;