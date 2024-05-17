
import './styles/App.css';
import React, {useContext} from 'react'
import { AppContext } from './App'

function Statistics({ onClose , plays, wins}) {
    const handleStartOver = () => {
        window.location.reload();   //SI HACER RELOAD MODO = 'undefined' SIN RELOAD DA BIEN MODO
        onClose();
    };
    const {guessedRows} = useContext(AppContext);

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

       <div className="stats-chart">
            <hr/>
            <div className="chart-title">Distribución de las mejores tiradas</div>
            <table>
                <tbody>
                    <tr>
                        <td className="number">#4</td>
                        <td>
                            <div className="percentage">0%</div>
                        </td>
                        <td className="amount">0</td>
                    </tr>
                    <tr>
                        <td className="number">#5</td>
                            <td>
                                <div className="percentage">0%</div>
                            </td>
                        <td className="amount">0</td>
                    </tr>
                    <tr>
                        <td className="number">#6</td>
                            <td>
                                <div className="percentage">0%</div>
                            </td>
                        <td className="amount">0</td>
                    </tr>
                    <tr>
                        <td className="number">#7</td>
                            <td>
                                <div className="percentage">0%</div>
                            </td>
                        <td className="amount">0</td>
                    </tr>
                    <tr>
                        <td className="number">#8</td>
                            <td>
                                <div className="percentage">0%</div>
                            </td>
                        <td className="amount">0</td>
                    </tr>
                </tbody>
            </table>
            <hr/>
       </div>
       
      </div>
    </div>
  );
}

export default Statistics;