import './styles/App.css';
import React, { useEffect, useState } from 'react';
import data from './data/db.json';

function App() {
  /** PARA ESCRIBIR LA LETRA EN LOS 4 A LA VEZ
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

const [values, setValues] = useState(['', '', '', '']);

const handleChange = (index) => (event) => {
  const newValues = [...values];
  newValues[index] = event.target.value;
  setValues(newValues);
};
*/

const [solution1, setSolution1] = useState(null);
const [solution2, setSolution2] = useState(null);
const [solution3, setSolution3] = useState(null);
const [solution4, setSolution4] = useState(null);

useEffect(() => {
  const getRandomIndex = (usedIndices) => {
    let index;
    do {
      index = Math.floor(Math.random() * data.solutions.length);
    } while (usedIndices.includes(index));
    return index;
  };

  const usedIndices = [];
  usedIndices.push(getRandomIndex(usedIndices));
  usedIndices.push(getRandomIndex(usedIndices));
  usedIndices.push(getRandomIndex(usedIndices));
  usedIndices.push(getRandomIndex(usedIndices));

  setSolution1(data.solutions[usedIndices[0]].word);
  setSolution2(data.solutions[usedIndices[1]].word);
  setSolution3(data.solutions[usedIndices[2]].word);
  setSolution4(data.solutions[usedIndices[3]].word);
}, []);

console.log(solution1);
console.log(solution2);
console.log(solution3);
console.log(solution4);

  return (

    <div className="Game">
        <div className="Game-options ">
          <button className="App-button App-button-marked" >Give up</button>
          <button className="App-button App-button-marked" >Start over</button>
        </div>
        <div className="game_container-outer">
          <div className="game_container-inner">
            <div className="game_boards">
              <div className="game_boards-row">
                <div className="row_field">
                  <div className="Row Row-current">
                    <input className="Row-letter"aria-live="assertive" type="text" maxLength="1" autoFocus/>
                    <input className="Row-letter"aria-live="assertive" type="text" maxLength="1"/>
                    <input className="Row-letter"aria-live="assertive" type="text" maxLength="1"/>
                    <input className="Row-letter"aria-live="assertive" type="text" maxLength="1"/>
                    <input className="Row-letter"aria-live="assertive" type="text" maxLength="1"/>
                    
                  </div>
                  <div className="Row">
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                  </div>
                  <div className="Row">
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                  </div>
                  <div className="Row">
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                  </div>
                  <div className="Row">
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                  </div>
                  <div className="Row">
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                  </div>
                  <div className="Row">
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                  </div>
                  <div className="Row">
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                  </div>
                </div>
                <div className="row_field">
                  <div className="Row Row-current">
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                  </div>
                  <div className="Row">
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                  </div>
                  <div className="Row">
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                  </div>
                  <div className="Row">
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                  </div>
                  <div className="Row">
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                  </div>
                  <div className="Row">
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                  </div>
                  <div className="Row">
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                  </div>
                  <div className="Row">
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                  </div>
                </div>
              </div>
              <div className="game_boards-row">
                <div className="row_field">
                  <div className="Row Row-current">
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                  </div>
                  <div className="Row">
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                  </div>
                  <div className="Row">
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                  </div>
                  <div className="Row">
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                  </div>
                  <div className="Row">
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                  </div>
                  <div className="Row">
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                  </div>
                  <div className="Row">
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                  </div>
                  <div className="Row">
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                  </div>
                </div>
                <div className="row_field">
                  <div className="Row Row-current">
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                  </div>
                  <div className="Row">
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                  </div>
                  <div className="Row">
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                  </div>
                  <div className="Row">
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                  </div>
                  <div className="Row">
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                  </div>
                  <div className="Row">
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                  </div>
                  <div className="Row">
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                  </div>
                  <div className="Row">
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                    <div className="Row-letter"aria-live="assertive"  ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Game-challenge-bar">

          </div>
          <div className="Game-keyboard">
            <div className="Game-keyboard-row">
              <button className="Game-keyboard-button" type="button" id="a">Q</button>
              <button className="Game-keyboard-button" type="button" id="a">W</button>
              <button className="Game-keyboard-button" type="button" id="a">E</button>
              <button className="Game-keyboard-button" type="button" id="a">R</button>
              <button className="Game-keyboard-button" type="button" id="a">T</button>
              <button className="Game-keyboard-button" type="button" id="a">Y</button>
              <button className="Game-keyboard-button" type="button" id="a">U</button>
              <button className="Game-keyboard-button" type="button" id="a">I</button>
              <button className="Game-keyboard-button" type="button" id="a">O</button>
              <button className="Game-keyboard-button" type="button" id="a">P</button>
            </div>
            <div className="Game-keyboard-row">
              <button className="Game-keyboard-button" type="button" id="a">A</button>
              <button className="Game-keyboard-button" type="button" id="a">S</button>
              <button className="Game-keyboard-button" type="button" id="a">D</button>
              <button className="Game-keyboard-button" type="button" id="a">F</button>
              <button className="Game-keyboard-button" type="button" id="a">G</button>
              <button className="Game-keyboard-button" type="button" id="a">H</button>
              <button className="Game-keyboard-button" type="button" id="a">J</button>
              <button className="Game-keyboard-button" type="button" id="a">K</button>
              <button className="Game-keyboard-button" type="button" id="a">L</button>
              <button className="Game-keyboard-button" type="button" id="a">Ñ</button>
            </div>
            <div className="Game-keyboard-row">
              <button className="Game-keyboard-button" type="button" id="a">⌫</button>
              <button className="Game-keyboard-button" type="button" id="a">Z</button>
              <button className="Game-keyboard-button" type="button" id="a">X</button>
              <button className="Game-keyboard-button" type="button" id="a">C</button>
              <button className="Game-keyboard-button" type="button" id="a">V</button>
              <button className="Game-keyboard-button" type="button" id="a">B</button>
              <button className="Game-keyboard-button" type="button" id="a">N</button>
              <button className="Game-keyboard-button" type="button" id="a">M</button>
              <button className="Game-keyboard-button" type="button" id="a">Enter</button>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default App;
