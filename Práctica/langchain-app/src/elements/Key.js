import React, {useContext} from 'react'
import { AppContext } from '../App'

function Key({val}) {
    const {onKeyDelete, onKeyEnter, OnKeyLetter} = useContext(AppContext);

    const keyPressed = () => {
        if (val === 'Delete') {
            onKeyDelete();    
        }
        else if (val === 'Enter') {
            onKeyEnter();
        }
        else{
            OnKeyLetter(val)
        }
    }
return (
    <div className="Game-keyboard-button" onClick={keyPressed}>
        {val === 'Delete' ? '⌫' : val}
    </div>
)
}

export default Key