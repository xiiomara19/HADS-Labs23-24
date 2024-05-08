import React from 'react'
import Key from './Key';

function Keyboard() {
  const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'];
  const row3 = ['Delete', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Enter'];
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