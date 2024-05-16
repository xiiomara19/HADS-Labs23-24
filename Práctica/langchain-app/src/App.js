import './styles/App.css';
import React, { useEffect, useState, createContext } from 'react';
import data from './data/db.json';
import Keyboard from './elements/Keyboard';
import Board from './elements/Board';
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
  }, [minutes, seconds])

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

  
  useEffect(() => {
    setTimeout(() => {
      setFirstPopup(false);
      }, 2000);
  }, []);

  useEffect(() => {
    CreateWordSet().then((words) => {
      setWordSet(words.wordSet);
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
        newGuessedRows[0] = {row: enteredLetter.row+1};
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
      console.log(guessedRows[0]);
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
    const colors2 = checkWord(wordAI, [solutionAI2]);  
    const colors3 = checkWord(wordAI, [solutionAI3]);
    const colors4 = checkWord(wordAI, [solutionAI4]);

    setDictionaryAI(filterDictionaryAI(dictionaryAI, wordAI, colors1, colors2, colors3, colors4));
    setEnteredLetterAI({row: enteredLetterAI.row+1, col: 0})
    receiveAttempt(colors1, colors2, colors3, colors4);
  }

  /////////////////////////////////////////////////////////////////////
  // -------------------  FUNCIONES IA ---------------------------
  /////////////////////////////////////////////////////////////////////
  
  const [boardAI, setBoardAI] = useState(boardBeginingAI);
  const [dictionaryAI, setDictionaryAI] = useState(new Set());
  const [wordAI, setWordAI] = useState('');
  

  const[enteredLetterAI, setEnteredLetterAI] = useState({row: 0, col: 0});

  useEffect(() => {
    CreateWordSet().then((words) => {
      setDictionaryAI(words.wordSet);
    }); 
  },[]);

  useEffect(() => {
    if (dictionaryAI.size > 0) {
  
      const dictionaryArray = Array.from(dictionaryAI);
      const frequencies = getFrequencies(dictionaryArray);

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
                  content: frequencies
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
    if (dictionaryAI.size > 0) {
      const dictionaryArray = Array.from(dictionaryAI);
      const frequencies = getFrequencies(dictionaryArray);

      try {
        const response = await fetch('http://localhost:5000/receiveAttempt', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messages: [
              {content: frequencies},
              {content: dictionaryArray},
              {content: res1},
              {content: res2},
              {content: res3},
              {content: res4},
              {content: wordAI}
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
    const updateBoardAI = (word) => {
    const newBoardAI = [...boardAI];
    for (let i = enteredLetterAI.col; i < word.length; i++) {
      newBoardAI[enteredLetterAI.row][i] = word[i];
      newBoardAI[enteredLetterAI.row][i+5] = word[i];
      newBoardAI[enteredLetterAI.row+9][i] = word[i];
      newBoardAI[enteredLetterAI.row+9][i+5] = word[i];
    }
    setBoardAI(newBoardAI);
    setEnteredLetterAI({row: enteredLetterAI.row, col: 0});
  };
    // Call the function to update boardAI with wordAI
    updateBoardAI(wordAI);
  }, [wordAI]);
  
  return (

    <div className="Game">
      <div className="Game-options ">
        <button id="giveUp" className="App-button App-button-marked" onClick={stop}>Rendirse</button>
        <button id="startOver" className="App-button App-button-marked invisible" onClick={handleStartOver}>Comenzar de nuevo</button>
        <button id="newSolutions" className='App-button App-button-marked' onClick={() => setSelectSolutions(true)}>Elegir soluciones</button>
      </div>
      <AppContext.Provider 
          value={{solution1, solution2, solution3, solution4,
          board, setBoard, enteredLetter, setEnteredLetter,
          onKeyDelete, onKeyEnter, OnKeyLetter, boardAI, 
          solutionAI1, solutionAI2, solutionAI3, solutionAI4, wordAI, wordSet, guessedRows, setGuessedRows}}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="game_container-outer" >     
                <Board/>
                <div className="Game-challenge-bar"></div>
                <Keyboard/>
            </div>
            <BoardAI/>
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
          <button className='close-btn' onClick={() => {
            setSelectSolutions(false); }}>✖</button>
          <input type="text" placeholder="Solucion 1" onChange={(e) => 
            {console.log(e.target.value.length);
              if (e.target.value !== "" && e.target.value.length === 5 ) setSolution1(e.target.value)}}></input>
          <p></p>
          <input type="text" placeholder="Solución 2" onChange={(e) => setSolution2(e.target.value)}></input>
          <p></p>
          <input type="text" placeholder="Solución 3" onChange={(e) => setSolution3(e.target.value)}></input>
          <p></p>
          <input type="text" placeholder="Solución 4" onChange={(e) => setSolution4(e.target.value)}></input>
          <br></br>
          <br></br>
          <button onClick={() => {
            setSelectSolutions(false);}}>Guardar cambios</button>
        </Popup>
      </div>
  );

  function checkWin(guessedRows) {

    if (guessedRows.every(row => Object.keys(row).length !== 0)) {
      console.log("win");
      setGameOver(true);
      return;
    }
  }
}



export default App;
