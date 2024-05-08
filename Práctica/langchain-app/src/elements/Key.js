import React, {useContext} from 'react'
import { AppContext } from '../App'

function Key({val}) {
    const {board, setBoard, enteredLetter, setEnteredLetter} = useContext(AppContext);

    const keyPressed = () => {
        const newBoard = [...board];
        if (val === 'Delete') {
            if (enteredLetter.col === 0) return;
            newBoard[enteredLetter.row][enteredLetter.col - 1] = '';
            newBoard[enteredLetter.row][enteredLetter.col + 4] = '';
            newBoard[enteredLetter.row + 9][enteredLetter.col - 1] = '';
            newBoard[enteredLetter.row + 9][enteredLetter.col + 4] = '';
            setEnteredLetter({row: enteredLetter.row, col: enteredLetter.col - 1})
          
        }
        else if (val === 'Enter') {
            if (enteredLetter.col !== 5) return;
            setEnteredLetter({row: enteredLetter.row + 1, col: 0});
        }

        else{
            if(enteredLetter.col > 4) return;
            newBoard[enteredLetter.row][enteredLetter.col] = val;
            newBoard[enteredLetter.row][enteredLetter.col + 5] = val;
            newBoard[enteredLetter.row + 9][enteredLetter.col] = val;
            newBoard[enteredLetter.row + 9][enteredLetter.col + 5] = val;
            setEnteredLetter({row: enteredLetter.row, col: enteredLetter.col + 1})
        }
        setBoard(newBoard);
    }
return (
    <div className="Game-keyboard-button" onClick={keyPressed}>
        {val === 'Delete' ? '⌫' : val}
    </div>
)
}

export default Key