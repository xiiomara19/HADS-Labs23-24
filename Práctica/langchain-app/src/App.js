import './styles/App.css';
import React, { useEffect, useState, createContext } from 'react';
import data from './data/db.json';
import Keyboard from './elements/Keyboard';
import Board from './elements/Board';
import { CreateWordSet, boardBegininig } from './Quordle';
import Popup from './elements/Popup'; 
import { fetchData} from './GroqFuncions';
import {ChatGroq} from '@langchain/groq';
import { ChatPromptTemplate } from "@langchain/core/prompts";


export const AppContext = createContext();


function App() {
  
  const [board, setBoard] = useState(boardBegininig);

  const [enteredLetter, setEnteredLetter] = useState({row: 0, col: 0});

  const [wordSet, setWordSet] = useState(new Set());

  const [solution1, setSolution1] = useState(null);
  const [solution2, setSolution2] = useState(null);
  const [solution3, setSolution3] = useState(null);
  const [solution4, setSolution4] = useState(null);
  
  const  [giveUpButton, setGiveUpButton] = useState(false);
  const [firstPopup, setFirstPopup] = useState(true);
  const [incorrectWord, setIncorrectWord] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [guessedRows, setGuessedRows] = useState([{}, {}, {}, {}]);

    useEffect(() => {
      const model = new ChatGroq({
        apiKey: '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',
      });

      const prompt = ChatPromptTemplate.fromMessages([
        ["system", "You are a helpful assistant"],
      ]);

      const fetchData = async () => {
        const chain = prompt.pipe(model);
        const response = await chain.invoke({
          input: "What is the capital of Spain?",
        });
        console.log("response", response);
      };

      fetchData();
      
    }, []);

  
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
    console.log(newBoard)
    
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
    console.log(guessedRows)
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
        newGuessedRows[0] = {value: word.toLowerCase()};
        setGuessedRows(newGuessedRows);
      }
      if (word.toLowerCase() === solution2){
        let newGuessedRows = [...guessedRows];
        newGuessedRows[1] = {value: word.toLowerCase()};
        setGuessedRows(newGuessedRows);
      }
      
      if (word.toLowerCase() === solution3 ) { 
        let newGuessedRows = [...guessedRows];
        newGuessedRows[2] = {value: word.toLowerCase()};
        setGuessedRows(newGuessedRows);
      }
  
      if ( word.toLowerCase() === solution4) {
        let newGuessedRows = [...guessedRows];
        newGuessedRows[3] = {value: word.toLowerCase()};
        setGuessedRows(newGuessedRows);
      }
      checkWin(guessedRows);
      console.log(guessedRows)
    }
    else {
      setIncorrectWord(true);
      setTimeout(() => {
        setIncorrectWord(false);
      }, 2000);
    }

  }
  
  return (

    <div className="Game">
      <div className="Game-options ">
        <button id="giveUp" className="App-button App-button-marked" onClick={() => setGiveUpButton(true)}>Rendirse</button>
        <button id="startOver" className="App-button App-button-marked invisible" onClick={handleStartOver}>Comenzar de nuevo</button>

      </div>
      <AppContext.Provider 
          value={{solution1, solution2, solution3, solution4,
          board, setBoard, enteredLetter, setEnteredLetter,
          onKeyDelete, onKeyEnter, OnKeyLetter}}>
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
          <button onClick={handleStartOver}>Comenzar de nuevo</button>
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
