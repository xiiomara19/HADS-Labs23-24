import React, {useContext} from 'react'
import { AppContext } from '../App'

function Cell({col, row}) {
    const {board} = useContext(AppContext);
    const cell = board[row][col];
    return (
        <div className="Row-letter" aria-live="assertive">{cell}</div>
    )
}

export default Cell