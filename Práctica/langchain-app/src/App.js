import './styles/App.css';
import React, { useEffect, useState, createContext } from 'react';
import data from './data/db.json';
import Keyboard from './elements/Keyboard';
import Board from './elements/Board';
import Quordle, { boardBegininig } from './Quordle';
import Popup from './elements/Popup';

export const AppContext = createContext();

function App() {

  const [board, setBoard] = useState(boardBegininig);

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
}, []);

console.log(solution1);
console.log(solution2);
console.log(solution3);
console.log(solution4);

const  [giveUpButton, setGiveUpButton] = useState(false);
const [firstPopup, setFirstPopup] = useState(true);

useEffect(() => {
  setTimeout(() => {
    setFirstPopup(false);
    }, 2000);
}, []);

const handleStartOver = () => {
  // Aquí puedes reiniciar tus estados o realizar cualquier otra lógica de reinicio necesaria
  setSolution1(null);
  setSolution2(null);
  setSolution3(null);
  setSolution4(null);
  setGiveUpButton(false);
  setFirstPopup(true);
  document.getElementById("giveUp").classList.remove("invisible");
  document.getElementById("startOver").classList.add("invisible");
};

  return (

    <div className="Game">
      <div className="Game-options ">
        <button id="giveUp" className="App-button App-button-marked" onClick={() => setGiveUpButton(true)}>Rendirse</button>
        <button id="startOver" className="App-button App-button-marked invisible" onClick={handleStartOver}>Comenzar de nuevo</button>

      </div>
      <AppContext.Provider 
          value={{solution1, solution2, solution3, solution4,
          board, setBoard}}>
        <div className="game_container-outer">
            <Board/>
          <div className="Game-challenge-bar">

          </div>
          <Keyboard/>
        </div>
      </AppContext.Provider>
        <Popup trigger={giveUpButton} setTrigger={setGiveUpButton}>
          <h1>Has PERDIDO </h1>
          <button className='close-btn' onClick={() => {
            setGiveUpButton(false); 
            document.getElementById("giveUp").classList.add("invisible");
            document.getElementById("startOver").classList.remove("invisible"); }}>✖</button>
          <p>La respuesta era:</p>
          <p>{solution1}, {solution2}, {solution3}, {solution4}</p>
          <button onClick={handleStartOver}>Comenzar de nuevo</button>
        </Popup>

        <Popup trigger={firstPopup} setTrigger={setFirstPopup}>
          <h1>¡Haz tu primera tirada!</h1>
        </Popup>
      </div>


    
  );
}

export default App;
