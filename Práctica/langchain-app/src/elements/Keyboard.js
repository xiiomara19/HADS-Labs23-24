import React,  {useEffect, useContext} from 'react'
import Key from './Key';
import { AppContext } from '../App'

function Keyboard() {
  const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'];
  const row3 = ['Delete', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Enter'];

  const {onKeyDelete, onKeyEnter, OnKeyLetter} = useContext(AppContext);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toUpperCase();
      if (row1.includes(key) || row2.includes(key) || row3.includes(key)) {
        OnKeyLetter(key)
      }
      if (key === 'BACKSPACE') {
        onKeyDelete();
      }
      if (key === 'ENTER') {
        onKeyEnter();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  })

  return (
          <div className="Game-keyboard">
            <div className="Game-keyboard-row">
              {row1.map((letter) => {return <Key key={letter} val={letter}/>})}
            </div>
            <div className="Game-keyboard-row">
              {row2.map((letter) => {return <Key key={letter} val={letter}/>})}
            </div>
            <div className="Game-keyboard-row">
              {row3.map((letter) => {return <Key key={letter} val={letter}/>})}
            </div>
          </div>
  )
}

export default Keyboard