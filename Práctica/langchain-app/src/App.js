import './styles/App.css';
import React, { useEffect, useState } from 'react';
import data from './data/db.json';
import Keyboard from './elements/Keyboard';
import Board from './elements/Board';
import Quordle from './Quordle';

function App() {

  
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

  setSolution1(data.solutions[usedIndices[0]]);
  setSolution2(data.solutions[usedIndices[1]]);
  setSolution3(data.solutions[usedIndices[2]]);
  setSolution4(data.solutions[usedIndices[3]]);

  // Alerta cuando se inicia el juego
  alert("¡El juego ha comenzado!");
}, []);

console.log(solution1);
console.log(solution2);
console.log(solution3);
console.log(solution4);

  return (

    <div className="Game">
        <div className="Game-options ">
          <button id="giveUp" className="App-button App-button-marked invisible" onClick={() => {alert("Te has rendido")}}>Give up</button>
          <button id="startOver" className="App-button App-button-marked invisible" onClick={() => {alert("Reiniciar")}}>Start over</button>
        </div>
        <div className="game_container-outer">
            <Board/>
          <div className="Game-challenge-bar">

          </div>
          <Keyboard/>
        </div>
      </div>

    
  );
}

export default App;
