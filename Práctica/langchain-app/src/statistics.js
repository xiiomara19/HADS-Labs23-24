
import './styles/App.css';
import React, {useContext} from 'react'
import { AppContext } from './App'

function Statistics({ onClose }) {
    const {guessedRows, wins, plays} = useContext(AppContext);
  return (
    <div className="App-page">
      <div className="App-title">
        Estadisticas
        <button className="App-button-close" onClick={onClose}>
        ✖
        </button>
      </div>
      <div className="App-statistics">
        <hr></hr>
       <div className="stats-container">
                <div className="stat-item">
                    <div className="stat-value">{plays}</div>
                    <div className="stat-description"> Games played </div>
                </div>
                <div className="stat-item">
                    <div className="stat-value"> {wins} </div>
                    <div className="stat-description"> Games won </div>
                </div>
                <div className="stat-item">
                    <div className="stat-value"> 0 </div>
                    <div className="stat-description"> % of wins </div>
                </div>
        </div>        
       <div className="stats-chart">
            <hr/>
            <div className="chart-title">Best tries distribution</div>
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