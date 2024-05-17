import './styles/App.css';
import React, { useEffect, useState, createContext } from 'react';
import data from './data/db.json';
import Keyboard from './elements/Keyboard';
import Board from './elements/Board';
import Statistics from './statistics';
import Info from './info';
import Settings from './settings';
import { CreateWordSet, boardBegininig, boardBeginingAI, getFrequencies, filterDictionaryAI} from './Quordle';
import Popup from './elements/Popup'; 
import BoardAI from './elements/BoardAI';


export const AppContext = createContext();


function App() {

  const [seconds, setSeconds] = useState(0);
  const[minutes, setMinutes] = useState(0);
  
  

  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setSeconds(0);
        setMinutes(minutes + 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds, minutes])

  function stop () {
    clearInterval(timer);
    setGiveUpButton(true);
  }
  

  /////////////////////////////////////////////////////////////////////
  // -------------------  FUNCIONES HUMANO ---------------------------
  /////////////////////////////////////////////////////////////////////
  
  const [solutionAI1, setSolutionAI1] = useState(null);
  const [solutionAI2, setSolutionAI2] = useState(null);
  const [solutionAI3, setSolutionAI3] = useState(null);
  const [solutionAI4, setSolutionAI4] = useState(null);

  const [solution1, setSolution1] = useState(null);
  const [solution2, setSolution2] = useState(null);
  const [solution3, setSolution3] = useState(null);
  const [solution4, setSolution4] = useState(null);

  const [board, setBoard] = useState(boardBegininig);
  const [enteredLetter, setEnteredLetter] = useState({row: 0, col: 0});
  const [wordSet, setWordSet] = useState(new Set());
  
  const [giveUpButton, setGiveUpButton] = useState(false);
  const [firstPopup, setFirstPopup] = useState(true);
  const [incorrectWord, setIncorrectWord] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [selectSolutions, setSelectSolutions] = useState(false);
  const [guessedRows, setGuessedRows] = useState([{}, {}, {}, {}]);
  const [mode, setMode] = useState();
  const [guessedRowsAI, setGuessedRowsAI] = useState([{}, {}, {}, {}]);

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
    usedIndices.push(getRandomIndex(usedIndices));
    usedIndices.push(getRandomIndex(usedIndices));
    usedIndices.push(getRandomIndex(usedIndices));
    usedIndices.push(getRandomIndex(usedIndices));

    setSolution1(data.solutions[usedIndices[0]]);
    setSolution2(data.solutions[usedIndices[1]]);
    setSolution3(data.solutions[usedIndices[2]]);
    setSolution4(data.solutions[usedIndices[3]]);
    setSolutionAI1(data.solutions[usedIndices[4]]);
    setSolutionAI2(data.solutions[usedIndices[5]]);
    setSolutionAI3(data.solutions[usedIndices[6]]);
    setSolutionAI4(data.solutions[usedIndices[7]]);
  }, []);
  
  useEffect(() => {

  console.log("Solutiones HUMANO: ");
  console.log(solution1);
  console.log(solution2);
  console.log(solution3);
  console.log(solution4);
  console.log("");
  console.log("Solutiones IA: ");
  console.log(solutionAI1);
  console.log(solutionAI2);
  console.log(solutionAI3);
  console.log(solutionAI4);
  console.log("");
  }, [solution1, solution2, solution3, solution4]);


  
  useEffect(() => {
    setTimeout(() => {
      setFirstPopup(false);
      }, 2000);
  }, []);

  useEffect(() => {
    CreateWordSet().then((words) => {
      setWordSet(words.wordSet);
      console.log(words.wordSet)
    }); 
  },[]);
  
  useEffect(() => {
    checkWin(guessedRows);
  }, [guessedRows]);

  const handleStartOver = () => {
    window.location.reload();
  };

  document.getElementById("home").onclick = handleStartOver;

  const OnKeyLetter = (val) => {
    if(enteredLetter.col > 4) return;
    if (enteredLetter.row > 8) return; 
    
    const newBoard = [...board];
    
    if (Object.keys(guessedRows[0]).length === 0) {
      newBoard[enteredLetter.row][enteredLetter.col] = val;
    }

    if (Object.keys(guessedRows[1]).length === 0) {
      newBoard[enteredLetter.row][enteredLetter.col + 5] = val;
    }

    if (Object.keys(guessedRows[2]).length === 0 ) {
      newBoard[enteredLetter.row + 9][enteredLetter.col] = val;
    }

    if (Object.keys(guessedRows[3]).length === 0) {
      newBoard[enteredLetter.row + 9][enteredLetter.col + 5] = val;
    }
    
    setEnteredLetter({row: enteredLetter.row, col: enteredLetter.col + 1})
    setBoard(newBoard)
  }

  const onKeyDelete = () => {
    if (enteredLetter.col === 0) return;
    const newBoard = [...board];
    newBoard[enteredLetter.row][enteredLetter.col - 1] = '';
    newBoard[enteredLetter.row][enteredLetter.col + 4] = '';
    newBoard[enteredLetter.row + 9][enteredLetter.col - 1] = '';
    newBoard[enteredLetter.row + 9][enteredLetter.col + 4] = '';
    setEnteredLetter({row: enteredLetter.row, col: enteredLetter.col - 1})
    setBoard(newBoard)
  } 

  const onKeyEnter = () => {
    console.log("LA IA VA POR LA ROW:",enteredLetterAI.row);
    if (enteredLetter.col !== 5) return;
    let word = '';
    for (let i=0; i<5; i++) {
      if (Object.keys(guessedRows[0]).length === 0) word += board[enteredLetter.row][i];
      else if (Object.keys(guessedRows[1]).length === 0) word += board[enteredLetter.row][i+5];
      else if (Object.keys(guessedRows[2]).length === 0) word += board[enteredLetter.row+9][i];
      else if (Object.keys(guessedRows[3]).length === 0) word += board[enteredLetter.row+9][i+5];
    }

    if (wordSet.has(word.toLowerCase())){
      setEnteredLetter({row: enteredLetter.row + 1, col: 0});
      if (word.toLowerCase() === solution1) {
        let newGuessedRows = [...guessedRows];
        newGuessedRows[0] = {row: enteredLetter.row};
        setGuessedRows(newGuessedRows);
      }
      if (word.toLowerCase() === solution2){
        let newGuessedRows = [...guessedRows];
        newGuessedRows[1] = {row: enteredLetter.row};
        setGuessedRows(newGuessedRows);
      }
      
      if (word.toLowerCase() === solution3 ) { 
        let newGuessedRows = [...guessedRows];
        newGuessedRows[2] = {row: enteredLetter.row};
        setGuessedRows(newGuessedRows);
      }
  
      if ( word.toLowerCase() === solution4) {
        let newGuessedRows = [...guessedRows];
        newGuessedRows[3] = {row: enteredLetter.row};
        setGuessedRows(newGuessedRows);
      }
      checkWin(guessedRows);
    }
    else {
      setIncorrectWord(true);
      setTimeout(() => {
        setIncorrectWord(false);
      }, 2000);
    }

    //send colors from AI to backend
    const colors1 = checkWord(wordAI, [solutionAI1]);
    if (colors1.every(color => color === "green")) {
      let newGuessedRowsAI = [...guessedRowsAI];
      newGuessedRowsAI[0] = {row: enteredLetterAI.row};
      setGuessedRowsAI(newGuessedRowsAI);
    }
    const colors2 = checkWord(wordAI, [solutionAI2]); 
    if (colors2.every(color => color === "green")) {
      let newGuessedRowsAI = [...guessedRowsAI];
      newGuessedRowsAI[1] = {row: enteredLetterAI.row};
      setGuessedRowsAI(newGuessedRowsAI);
    } 
    const colors3 = checkWord(wordAI, [solutionAI3]);
    if (colors3.every(color => color === "green")) {
      let newGuessedRowsAI = [...guessedRowsAI];
      newGuessedRowsAI[2] = {row: enteredLetterAI.row};
      setGuessedRowsAI(newGuessedRowsAI);
    }
    const colors4 = checkWord(wordAI, [solutionAI4]);
    if (colors4.every(color => color === "green")) {
      let newGuessedRowsAI = [...guessedRowsAI];
      newGuessedRowsAI[4] = {row: enteredLetterAI.row};
      setGuessedRowsAI(newGuessedRowsAI);
    }

    setAttemptsResults(attemtsResults+ '. Your guess was '+ wordAI + 
    ', the results for that guess were: first hidden word -->'+ 
    colors1 + ', Second hidden word -->'+ colors2 + 
    ', Third hidden word -->'+ colors3 + ', Fourth hidden word -->'+ colors4 + '.')
    

    console.log (guessedRowsAI)

    setDictionaryAI(filterDictionaryAI(dictionaryAI, wordAI, colors1, colors2, colors3, colors4));
    setEnteredLetterAI({row: enteredLetterAI.row+1, col: 0})
    console.log(dictionaryAI);
    receiveAttempt(colors1, colors2, colors3, colors4);
    console.log(dictionaryAI);
  }


  /////////////////////////////////////////////////////////////////////
  // -------------------  FUNCIONES IA ---------------------------
  /////////////////////////////////////////////////////////////////////
  
  const [boardAI, setBoardAI] = useState(boardBeginingAI);
  const [dictionaryAI, setDictionaryAI] = useState(new Set());
  const [wordAI, setWordAI] = useState('');
  const [attemtsResults, setAttemptsResults] = useState('');

  const[enteredLetterAI, setEnteredLetterAI] = useState({row: 0, col: 0});

  useEffect(() => {
    console.log('Dictionary AI has been updated:', dictionaryAI);
  }, [dictionaryAI]);

  useEffect(() => {
    CreateWordSet().then((words) => {
      setDictionaryAI(words.wordSet);
    }); 
  },[]);




  useEffect(() => {
    if (dictionaryAI.size > 0) {
      const dictionaryArray = Array.from(dictionaryAI);
      const frequencies = getFrequencies(dictionaryArray);

      let msg = "For a list of 5 letters long words in Spanish, this are the frequences "+
      "of appearence for each letter of the alphabet in order"+ frequencies +
      " Guess a 5 letters long word in spanish based on the frequency of appearence given, so that you find the hidden word." +
      " Return just the 5 letters word following the format: 'guess: word'.";

      const sendFrequencies = async () => {
        try {
          const response = await fetch('http://localhost:5000/sendFrequencesBegining', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              messages: [
                {
                  content: msg
                },
                {content: dictionaryArray}
              ]
            }),
          });
  
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
  
          // Get the response data
          const responseData = await response.json();
          console.log(dictionaryAI);
          console.log('Word:', responseData);
          // Save the prediction in wordPredictionAI
          setWordAI(responseData);
  
        } catch (error) {
          console.error('Error sending frequencies:', error);
        }
      };
  
      sendFrequencies();
    }
  }, [dictionaryAI]);
  


  async function receiveAttempt(res1, res2, res3, res4) {
   
    if (dictionaryAI.size > 0 || dictionaryAI.length > 0) {
      const dictionaryArray = Array.from(dictionaryAI);
      const frequencies = getFrequencies(dictionaryArray);

      let msg = "For a list of 5 letters long words in Spanish, this are the frequences of appearence for each letter of the alphabet in order"+ 
                            frequencies +
                            " Your previous guesses were: " + attemtsResults +
                            " Green means the letter in the guessed word is at the correct position" +
                            " Yellow means the letter in the guessed word is in the hidden word but in the wrong position" +
                            " Grey means the letter in the guessed word is not in the hidden word." +
                            " Guess a 5 letters long word in spanish based on the frequency of appearence given, so that you find the hidden words." +
                            " Return just the 5 letters word following the format: 'guess: word'.";
      
      try {
        const response = await fetch('http://localhost:5000/receiveAttempt', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messages: [
              {content: msg},
              {content: dictionaryArray}
            ]
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Get the response data
        const responseData = await response.json();
        console.log('Word:', responseData);
        // Save the prediction in wordPredictionAI
        setWordAI(responseData);

      } catch (error) {
        console.error('Error sending frequencies:', error);
      }
    }
  }

  //Devuelve array de colores para enviar a backend 
  function checkWord(word, solutions) {
    const colors = [];
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      let found = false;
      for (let j = 0; j < solutions.length; j++) {
        if (solutions[j].includes(letter)) {
          found = true;
          if (solutions[j][i] === letter) {
            colors.push("green");
          } else {
            colors.push("yellow");
          }
          break;
        }
      }
      if (!found) {
        colors.push("grey");
      }
    }
    return colors;
  }
  


  useEffect(() => {
  // Function to update boardAI with the wordAI horizontally at the first row
    if (enteredLetterAI.row === 8) return;
    const updateBoardAI = (word) => {
    const newBoardAI = [...boardAI];
    console.log(word.length)
    for (let i = enteredLetterAI.col; i < word.length; i++) {
      console.log (word[i])
      if (Object.keys(guessedRowsAI[0]).length === 0) {
        console.log("entra 1")
        newBoardAI[enteredLetterAI.row][i] = word[i];
      }
  
      if (Object.keys(guessedRowsAI[1]).length === 0) {
        console.log("entra 2")
        newBoardAI[enteredLetterAI.row][i + 5] = word[i];
      }
  
      if (Object.keys(guessedRowsAI[2]).length === 0 ) {
        console.log("entra 3")
        newBoardAI[enteredLetterAI.row + 9][i] = word[i];
      }
  
      if (Object.keys(guessedRowsAI[3]).length === 0) {
        console.log("entra 4")
        newBoardAI[enteredLetterAI.row + 9][i + 5] = word[i];
      }
    }
    setBoardAI(newBoardAI);
    setEnteredLetterAI({row: enteredLetterAI.row, col: 0});
  };
    // Call the function to update boardAI with wordAI
    updateBoardAI(wordAI);
  }, [wordAI]);

  const [activeComponent, setActiveComponent] = useState('game');

  window.handleButtonClick = function(componentName) {
    setActiveComponent(componentName);
  };
  const handleModeChange = (newMode) => {
    setMode(newMode);
    console.log("Mode changed to:", newMode);
  };
  useEffect(() => {
    console.log("Current mode:", mode); // Log the current mode whenever it changes
  }, [mode]);
  
  return (

    <div className="Game">
      <div className="Game-options ">
        <button id="giveUp" className="App-button App-button-marked" onClick={stop}>Rendirse</button>
        <button id="startOver" className="App-button App-button-marked invisible" onClick={handleStartOver}>Comenzar de nuevo</button>
        <button id="newSolutions" className='App-button App-button-marked' onClick={() => {console.log(enteredLetter.row); if (enteredLetter.row === 0) setSelectSolutions(true)}}>Elegir soluciones</button>
      </div>
      <AppContext.Provider 
          value={{solution1, solution2, solution3, solution4,
          board, setBoard, enteredLetter, setEnteredLetter,
          onKeyDelete, onKeyEnter, OnKeyLetter, boardAI, 
          solutionAI1, solutionAI2, solutionAI3, solutionAI4, wordAI, wordSet, guessedRows, setGuessedRows, mode,
          solutionAI1, solutionAI2, solutionAI3, solutionAI4, 
          wordAI, wordSet, guessedRows, enteredLetterAI, guessedRowsAI}}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: activeComponent === 'game' ? 'flex-start' : 'center' }}>
            {activeComponent === 'game' ? (
              <div className="game_container-inner">
                <Board />
                <div className="Game-challenge-bar"></div>
                <Keyboard />
              </div>
            ) : activeComponent === 'settings' ? (
              <Settings onClose={() => setActiveComponent('game')} onModeChange={handleModeChange}> 
              </Settings>
            ) : activeComponent === 'statistics' ? (
              <Statistics onClose={() => window.handleButtonClick('game')} />
            ) : activeComponent === 'info' ? (
              <Info onClose={() => window.handleButtonClick('game')} />
            ) : null}
            {activeComponent === 'game' && <BoardAI />}
          </div>

      </AppContext.Provider>
        <Popup trigger={giveUpButton} setTrigger={setGiveUpButton}>
          <h1>Has PERDIDO </h1>
          <button className='close-btn' onClick={() => {
            setGiveUpButton(false); 
            document.getElementById("giveUp").classList.add("invisible");
            document.getElementById("startOver").classList.remove("invisible"); }}>✖</button>
          <p>Las respuestas eran:</p>
          <p>{solution1}, {solution2}, {solution3}, {solution4}</p>
          <br/>
          <p> Has tardado: {minutes<10? "0"+minutes:minutes}:{seconds<10? "0"+seconds:seconds}</p>
          <button onClick={handleStartOver}>Comenzar de nuevo</button>
        </Popup>

        <Popup trigger={firstPopup} setTrigger={setFirstPopup}>
          <h1>¡Haz tu primera tirada!</h1>
        </Popup>

        <Popup trigger={incorrectWord} setTrigger={setIncorrectWord}>
          <h1>No es una palabra valida</h1>
        </Popup>

        <Popup trigger={gameOver} setTrigger={setGameOver}>
          <h1>Has GANADO</h1>
          <button className='close-btn' onClick={() => {
            setGameOver(false); 
            document.getElementById("giveUp").classList.add("invisible");
            document.getElementById("startOver").classList.remove("invisible"); }}>✖</button>
          <h1>¡Felicidades!</h1>
          <br/>
          
          <p> Lo has conseguido en {minutes<10? "0"+minutes:minutes}:{seconds<10? "0"+seconds:seconds}</p>
          <button onClick={handleStartOver}>Comenzar de nuevo</button>
        </Popup>

        <Popup trigger={selectSolutions} setTrigger={setSelectSolutions}>
          <h1>Puedes elegir las soluciones de tu juego:</h1>
          <b>(En caso de que no introduzca nada se mantendrá la solución original)</b>
          <p></p>
          <button className='close-btn' onClick={() => {
            setSelectSolutions(false); }}>✖</button>
          <div>
          <input id="sol1" type="text" placeholder="Solucion 1"></input>
          <p id ="msg1" className='invisible'> Debe introducir una palabra valida de 5 letras</p>
          </div>
          <p></p>
          <div>
          <input id="sol2" type="text" placeholder="Solución 2"></input>
          <p id="msg2" className='invisible'> Debe introducir una palabra valida de 5 letras</p>
          </div>
          <p></p>
          <div>
          <input id="sol3" type="text" placeholder="Solución 3"></input>
          <p id="msg3" className='invisible'> Debe introducir una palabra valida de 5 letras</p>
          </div>
          <p></p>
          <div>
          <input id="sol4" type="text" placeholder="Solución 4"></input>
          <p id="msg4" className='invisible'> Debe introducir una palabra valida de 5 letras</p>
          </div>
          <br></br>
          <p id="cambiosMsg" className='invisible'>Se han guardado sus nuevas soluciones</p>
          <br></br>
          <button onClick={() => {
            let sol1 = document.getElementById("sol1");
            let msg1 = document.getElementById("msg1");
            console.log(sol1.value);
            if (!wordSet.has(sol1.value)) if (sol1.value.length !== 0) msg1.classList.remove("invisible");

            let sol2 = document.getElementById("sol2");
            let msg2 = document.getElementById("msg2");
            if (!wordSet.has(sol2.value)) if(sol2.value.length !== 0) msg2.classList.remove("invisible");

            let sol3 = document.getElementById("sol3");
            let msg3 = document.getElementById("msg3");
            if (!wordSet.has(sol3.value)) if (sol3.value.length !== 0) msg3.classList.remove("invisible");

            let sol4 = document.getElementById("sol4");
            let msg4 = document.getElementById("msg4");
            if (!wordSet.has(sol4.value)) if (sol4.value.length !== 0 ) msg4.classList.remove("invisible");
            
            if((wordSet.has(sol1.value) || sol1.value.length === 0) && (wordSet.has(sol2.value) || sol2.value.length === 0) && (wordSet.has(sol3.value) || sol3.value.length === 0) && (wordSet.has(sol4.value) === 5 || sol4.value.length === 0)){
              document.getElementById("cambiosMsg").classList.remove("invisible");
              msg1.classList.add("invisible");
              msg2.classList.add("invisible");
              msg3.classList.add("invisible");
              msg4.classList.add("invisible");
              if (sol1.value.length !== 0) setSolution1(sol1.value);
              if (sol2.value.length !== 0)  setSolution2(sol2.value);
              if (sol3.value.length !== 0)  setSolution3(sol3.value);
              if (sol4.value.length !== 0) setSolution4(sol4.value);
            }}}>Guardar cambios</button>
        </Popup>
      </div>
  );

  function checkWin(guessedRows) {
    if (guessedRows.every(row => Object.values(row).length === 1)) {
      console.log("win");
      setGameOver(true);
      return;
    }
    else if (enteredLetter.row === 8) {
      console.log("perdido")
      setGiveUpButton(true);
      return;
    }
  }
}



export default App;
