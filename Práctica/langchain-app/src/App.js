import './styles/App.css';
import React, { useEffect, useState } from 'react';
import data from './data/db.json';
import Keyboard from './elements/Keyboard';

function App() {

  const [l1, setValue1] = useState('');

  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };

  const [l2, setValue2] = useState('');

  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };

  const [l3, setValue3] = useState('');

  const handleChange3 = (event) => {
    setValue3(event.target.value);
  };

  const [l4, setValue4] = useState('');

  const handleChange4 = (event) => {
    setValue4(event.target.value);
  };

  const [l5, setValue5] = useState('');

  const handleChange5 = (event) => {
    setValue5(event.target.value);
  };
  /** PARA ESCRIBIR LA LETRA EN LOS 4 A LA VEZ
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
                    <input id='T1R1C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" autoFocus value={l1} onChange={handleChange1}/>
                    <input id='T1R1C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l2} onChange={handleChange2} readOnly/>
                    <input id='T1R1C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l3} onChange={handleChange3} readOnly/>
                    <input id='T1R1C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l4} onChange={handleChange4} readOnly/>
                    <input id='T1R1C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l5} onChange={handleChange5} readOnly/>
                    
                  </div>
                  <div className="Row">
                    <input id='T1R2C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T1R2C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T1R2C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T1R2C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T1R2C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T1R3C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T1R3C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T1R3C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T1R3C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T1R3C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T1R4C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T1R4C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T1R4C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T1R4C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T1R4C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                  <input id='T1R5C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T1R5C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T1R5C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T1R5C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T1R5C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                  <input id='T1R6C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T1R6C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T1R6C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T1R6C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T1R6C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T1R7C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T1R7C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T1R7C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T1R7C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T1R7C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T1R8C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T1R8C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T1R8C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T1R8C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T1R8C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T1R9C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T1R9C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T1R9C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T1R9C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T1RC5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                </div>
                <div className="row_field">
                <div className="Row Row-current">
                    <input id='T2R1C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l1} onChange={handleChange1} readOnly/>
                    <input id='T2R1C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l2} onChange={handleChange2} readOnly/>
                    <input id='T2R1C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l3} onChange={handleChange3} readOnly/>
                    <input id='T2R1C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l4} onChange={handleChange4} readOnly/>
                    <input id='T2R1C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l5} onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T2R2C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T2R2C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T2R2C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T2R2C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T2R2C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T2R3C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T2R3C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T2R3C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T2R3C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T2R3C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T2R4C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T2R4C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T2R4C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T2R4C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T2R4C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T2R5C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T2R5C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T2R5C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T2R5C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T2R5C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T2R6C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T2R6C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T2R6C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T2R6C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T2R6C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T2R7C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T2R7C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T2R7C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T2R7C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T2R7C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T2R8C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T2R8C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T2R8C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T2R8C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T2R8C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T2R9C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T2R9C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T2R9C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T2R9C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T2R9C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                </div>
              </div>
              <div className="game_boards-row">
                <div className="row_field">
                  <div className="Row Row-current">
                  <input id='T3R1C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l1} onChange={handleChange1} readOnly/>
                    <input id='T3R1C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l2} onChange={handleChange2} readOnly/>
                    <input id='T3R1C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l3} onChange={handleChange3} readOnly/>
                    <input id='T3R1C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l4} onChange={handleChange4} readOnly/>
                    <input id='T3R1C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l5} onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                  <input id='T3R2C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T3R2C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T3R2C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T3R2C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T3R2C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T3R3C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T3R3C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T3R3C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T3R3C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T3R3C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T3R4C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T3R4C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T3R4C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T3R4C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T3R4C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T3R5C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T3R5C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T3R5C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T3R5C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T3R5C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                  <input id='T3R6C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T3R6C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T3R6C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T3R6C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T3R6C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                  <input id='T3R7C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T3R7C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T3R7C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T3R7C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T3R7C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                  <input id='T3R8C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T3R8C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T3R8C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T3R8C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T3R8C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                  <input id='T3R9C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T3R9C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T3R9C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T3R9C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T3R9C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                </div>
                <div className="row_field">
                  <div className="Row Row-current">
                    <input id='T4R1C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l1} onChange={handleChange1} readOnly/>
                    <input id='T4R1C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l2} onChange={handleChange2} readOnly/>
                    <input id='T4R1C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l3} onChange={handleChange3} readOnly/>
                    <input id='T4R1C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l4} onChange={handleChange4} readOnly/>
                    <input id='T4R1C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l5} onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T4R2C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T4R2C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T4R2C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T4R2C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T4R2C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T4R3C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T4R3C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T4R3C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T4R3C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T4R3C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                   <input id='T4R4C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T4R4C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T4R4C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T4R4C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T4R4C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                  <input id='T4R5C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T4R5C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T4R5C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T4R5C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T4R5C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                  <input id='T4R6C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T4R6C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T4R6C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T4R6C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T4R6C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                  <input id='T4R7C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T4R7C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T4R7C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T4R7C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T4R7C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                  <input id='T4R8C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T4R8C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T4R8C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T4R8C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T4R8C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                  <input id='T4R9C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T4R9C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T4R9C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T4R9C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T4R9C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Game-challenge-bar">

          </div>
          <Keyboard/>
        </div>
      </div>
    
  );
}

export default App;
