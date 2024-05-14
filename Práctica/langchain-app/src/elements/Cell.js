import React, {useContext} from 'react'
import { AppContext } from '../App'


function Cell({col, row}) {
    const {board, solution1, solution2, solution3, solution4, enteredLetter} = useContext(AppContext);
    const cell = board[row][col];
    if (cell === "") {
        return <div className="Row-letter" aria-live="assertive"></div>;
    }
    if (enteredLetter.row > row) {
        if (col < 5){
            return checkCell(solution1, col, cell);
        }
        if (col > 4){
            return checkCell(solution2, col - 5, cell);
        }
    }

    if (row > 8 && enteredLetter.row +9 > row ) {
        if (col < 5){
            return checkCell(solution3, col, cell);
        }
        if (col > 4){
            return checkCell(solution4, col - 5, cell);
        }
    }
    return <div className="Row-letter" aria-live="assertive">{cell}</div>;
}

function checkCell(solution, index, cell){
    if (cell === "") {
        return;
    }
    if (solution !== null) {
        let correct, almost;
        correct = solution[index] === cell.toLowerCase();
        almost = !correct && solution.includes(cell.toLowerCase());
        if (correct) {
            return <div className="Row-letter letter-correct" aria-live="assertive">{cell}</div>
        }
        if (almost) {
            return <div className="Row-letter letter-elsewhere" aria-live="assertive">{cell}</div>
        }
        return <div className="Row-letter letter-absent" aria-live="assertive">{cell}</div>
        } 
}

export default Cell