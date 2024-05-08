import React, {useContext} from 'react'
import { AppContext } from '../App'

function Key({val}) {
    const {board, setBoard, enteredLetter, setEnteredLetter} = useContext(AppContext);

    const keyPressed = () => {
        const newBoard = [...board];
        newBoard[enteredLetter.row][enteredLetter.col] = val;
        newBoard[enteredLetter.row][enteredLetter.col + 5] = val;
        newBoard[enteredLetter.row + 9][enteredLetter.col] = val;
        newBoard[enteredLetter.row + 9][enteredLetter.col + 5] = val;

        setEnteredLetter({row: enteredLetter.row, col: enteredLetter.col + 1})

        setBoard(newBoard);
    }
return (
    <div className="Game-keyboard-button" onClick={keyPressed}>
        {val === 'Delete' ? '⌫' : val}
    </div>
)
}

export default Key