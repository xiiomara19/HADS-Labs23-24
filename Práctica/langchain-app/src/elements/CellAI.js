import React, {useContext} from 'react'
import { AppContext } from '../App'


function CellAI({col, row}) {
    const {boardAI, solutionAI1, solutionAI2, solutionAI3, solutionAI4, enteredLetter} = useContext(AppContext);
    const cell = boardAI[row][col];

    if (enteredLetter.row > row) {
        if (col < 5){
            return checkCell(solutionAI1, col, cell);
        }
        if (col > 4){
            return checkCell(solutionAI2, col - 5, cell);
        }
    }

    if (row > 8 && enteredLetter.row +9 > row ) {
        if (col < 5){
            return checkCell(solutionAI3, col, cell);
        }
        if (col > 4){
            return checkCell(solutionAI4, col - 5, cell);
        }
    }
    return <div className="Row-letter" aria-live="assertive">{cell}</div>;
}

function checkCell(solutionAI, index, cell){
    if (cell === "") {
        return;
    }
    if (solutionAI !== null) {
        let correct, almost;
        correct = solutionAI[index] === cell.toLowerCase();
        almost = !correct && solutionAI.includes(cell.toLowerCase());
        if (correct) {
            return <div className="Row-letter letter-correct" aria-live="assertive">{cell}</div>
        }
        if (almost) {
            return <div className="Row-letter letter-elsewhere" aria-live="assertive">{cell}</div>
        }
        return <div className="Row-letter letter-absent" aria-live="assertive">{cell}</div>
        } 
}

export default CellAI