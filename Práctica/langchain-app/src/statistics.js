import logo from './logo.svg';
import './App.css';

function Statistics({ onClose }) {
  return (
    <div class="App-page">
      <div class="App-title">
        Statistics
        <button class="App-button-close" onClick={onClose}>
        ✖
        </button>
      </div>
      <div class="App-statistics">
        <hr></hr>
       <div class="stats-container">
                <div class="stat-item">
                    <div class="stat-value"> 0 </div>
                    <div class="stat-description"> Games played </div>
                </div>
                <div class="stat-item">
                    <div class="stat-value"> 0 </div>
                    <div class="stat-description"> Games won </div>
                </div>
                <div class="stat-item">
                    <div class="stat-value"> 0 </div>
                    <div class="stat-description"> % of wins </div>
                </div>
        </div>        
       <div class="stats-chart">
            <hr/>
            <div class="chart-title">Best tries distribution</div>
            <table>
                <tbody>
                    <tr>
                        <td class="number">#4</td>
                        <td>
                            <div class="percentage">0%</div>
                        </td>
                        <td class="amount">0</td>
                    </tr>
                    <tr>
                        <td class="number">#5</td>
                            <td>
                                <div class="percentage">0%</div>
                            </td>
                        <td class="amount">0</td>
                    </tr>
                    <tr>
                        <td class="number">#6</td>
                            <td>
                                <div class="percentage">0%</div>
                            </td>
                        <td class="amount">0</td>
                    </tr>
                    <tr>
                        <td class="number">#7</td>
                            <td>
                                <div class="percentage">0%</div>
                            </td>
                        <td class="amount">0</td>
                    </tr>
                    <tr>
                        <td class="number">#8</td>
                            <td>
                                <div class="percentage">0%</div>
                            </td>
                        <td class="amount">0</td>
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