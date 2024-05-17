
import './styles/App.css';

function Statistics({ onClose , plays, wins}) {
    const handleStartOver = () => {
        window.location.reload(); 
        onClose();
    };

    return (
    <div className="App-page">
      <div className="App-title">
        Estadisticas
        <button className="App-button-close" onClick={handleStartOver}>
        ✖
        </button>
      </div>
      <div className="App-statistics">
        <hr></hr>
       <div className="stats-container">
                <div className="stat-item">
                    <div className="stat-value">{plays}</div>
                    <div className="stat-description"> Partidas jugadas </div>
                </div>
                <div className="stat-item">
                    <div className="stat-value"> {wins} </div>
                    <div className="stat-description"> Partidas ganadas </div>
                </div>
                <div className="stat-item">
                    <div className="stat-value"> {(wins * 100 / plays).toFixed(2)} </div>
                    <div className="stat-description"> % de victorias </div>
                </div>
        </div>

       </div>
    </div>
  );
}

export default Statistics;