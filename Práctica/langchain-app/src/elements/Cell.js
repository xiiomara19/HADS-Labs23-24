import React, {useContext} from 'react'
import { AppContext } from '../App'


function Cell({col, row}) {
    const {board, solution1, solution2, solution3, solution4, enteredLetter} = useContext(AppContext);
    const cell = board[row][col];
    let correct, almost;

    if (enteredLetter.row > row  && cell !== "" ) {
        if (solution1 !== null && col < 5){
            correct = solution1[col] === cell.toLowerCase();
            almost = !correct && solution1.includes(cell.toLowerCase());
            if (correct) {
                return <div className="Row-letter letter-correct" aria-live="assertive">{cell}</div>
            }
            if (almost) {
                return <div className="Row-letter letter-elsewhere" aria-live="assertive">{cell}</div>
            }
            return <div className="Row-letter letter-absent" aria-live="assertive">{cell}</div>
        }

        if (solution2 !== null){
            correct = solution2[col - 5] === cell.toLowerCase();
            almost = !correct && solution2.includes(cell.toLowerCase());
            if (correct) {
                return <div className="Row-letter letter-correct" aria-live="assertive">{cell}</div>
            }
            if (almost) {
                return <div className="Row-letter letter-elsewhere" aria-live="assertive">{cell}</div>
            }
            return <div className="Row-letter letter-absent" aria-live="assertive">{cell}</div>
        }
    }

    if (row > 8 && cell !== "" && enteredLetter.row +9 > row ) {
        
        if ( solution3 !== null && col < 5){
            correct = solution3[col] === cell.toLowerCase();
            almost = !correct && solution3.includes(cell.toLowerCase());
            if (correct) {
                return <div className="Row-letter letter-correct" aria-live="assertive">{cell}</div>
            }
            if (almost) {
                return <div className="Row-letter letter-elsewhere" aria-live="assertive">{cell}</div>
            }
            return <div className="Row-letter letter-absent" aria-live="assertive">{cell}</div>
        }

        if (solution4 !== null && col > 4){
            correct = solution4[col-5] === cell.toLowerCase();
            almost = !correct && solution4.includes(cell.toLowerCase());
            if (correct) {
                return <div className="Row-letter letter-correct" aria-live="assertive">{cell}</div>
            }
            if (almost) {
                return <div className="Row-letter letter-elsewhere" aria-live="assertive">{cell}</div>
            }
            return <div className="Row-letter letter-absent" aria-live="assertive">{cell}</div>
        }
    }

    return (
        <div className="Row-letter" aria-live="assertive">{cell}</div>
    )
}

export default Cell