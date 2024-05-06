import React, { useEffect, useState } from 'react'


function Board() {
    const [l1, setValue1] = useState('');

  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };

  const [l2, setValue2] = useState('');

  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };

  const [l3, setValue3] = useState('');

  const handleChange3 = (event) => {
    setValue3(event.target.value);
  };

  const [l4, setValue4] = useState('');

  const handleChange4 = (event) => {
    setValue4(event.target.value);
  };

  const [l5, setValue5] = useState('');

  const handleChange5 = (event) => {
    setValue5(event.target.value);
  };
  return (
    <div className="game_container-inner">
            <div className="game_boards">
              <div className="game_boards-row">
                <div className="row_field">
                  <div className="Row Row-current">
                    <input id='T1R1C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" autoFocus value={l1} onChange={handleChange1}/>
                    <input id='T1R1C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l2} onChange={handleChange2} readOnly/>
                    <input id='T1R1C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l3} onChange={handleChange3} readOnly/>
                    <input id='T1R1C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l4} onChange={handleChange4} readOnly/>
                    <input id='T1R1C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l5} onChange={handleChange5} readOnly/>
                    
                  </div>
                  <div className="Row">
                    <input id='T1R2C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T1R2C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T1R2C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T1R2C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T1R2C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T1R3C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T1R3C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T1R3C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T1R3C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T1R3C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T1R4C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T1R4C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T1R4C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T1R4C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T1R4C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                  <input id='T1R5C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T1R5C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T1R5C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T1R5C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T1R5C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                  <input id='T1R6C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T1R6C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T1R6C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T1R6C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T1R6C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T1R7C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T1R7C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T1R7C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T1R7C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T1R7C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T1R8C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T1R8C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T1R8C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T1R8C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T1R8C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T1R9C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T1R9C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T1R9C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T1R9C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T1RC5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                </div>
                <div className="row_field">
                <div className="Row Row-current">
                    <input id='T2R1C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l1} onChange={handleChange1} readOnly/>
                    <input id='T2R1C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l2} onChange={handleChange2} readOnly/>
                    <input id='T2R1C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l3} onChange={handleChange3} readOnly/>
                    <input id='T2R1C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l4} onChange={handleChange4} readOnly/>
                    <input id='T2R1C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l5} onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T2R2C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T2R2C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T2R2C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T2R2C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T2R2C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T2R3C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T2R3C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T2R3C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T2R3C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T2R3C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T2R4C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T2R4C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T2R4C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T2R4C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T2R4C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T2R5C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T2R5C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T2R5C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T2R5C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T2R5C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T2R6C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T2R6C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T2R6C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T2R6C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T2R6C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T2R7C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T2R7C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T2R7C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T2R7C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T2R7C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T2R8C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T2R8C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T2R8C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T2R8C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T2R8C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T2R9C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T2R9C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T2R9C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T2R9C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T2R9C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                </div>
              </div>
              <div className="game_boards-row">
                <div className="row_field">
                  <div className="Row Row-current">
                  <input id='T3R1C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l1} onChange={handleChange1} readOnly/>
                    <input id='T3R1C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l2} onChange={handleChange2} readOnly/>
                    <input id='T3R1C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l3} onChange={handleChange3} readOnly/>
                    <input id='T3R1C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l4} onChange={handleChange4} readOnly/>
                    <input id='T3R1C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l5} onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                  <input id='T3R2C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T3R2C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T3R2C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T3R2C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T3R2C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T3R3C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T3R3C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T3R3C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T3R3C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T3R3C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T3R4C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T3R4C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T3R4C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T3R4C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T3R4C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T3R5C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T3R5C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T3R5C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T3R5C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T3R5C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                  <input id='T3R6C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T3R6C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T3R6C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T3R6C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T3R6C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                  <input id='T3R7C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T3R7C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T3R7C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T3R7C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T3R7C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                  <input id='T3R8C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T3R8C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T3R8C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T3R8C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T3R8C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                  <input id='T3R9C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T3R9C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T3R9C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T3R9C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T3R9C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                </div>
                <div className="row_field">
                  <div className="Row Row-current">
                    <input id='T4R1C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l1} onChange={handleChange1} readOnly/>
                    <input id='T4R1C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l2} onChange={handleChange2} readOnly/>
                    <input id='T4R1C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l3} onChange={handleChange3} readOnly/>
                    <input id='T4R1C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l4} onChange={handleChange4} readOnly/>
                    <input id='T4R1C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" value={l5} onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T4R2C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T4R2C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T4R2C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T4R2C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T4R2C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                    <input id='T4R3C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T4R3C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T4R3C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T4R3C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T4R3C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                   <input id='T4R4C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T4R4C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T4R4C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T4R4C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T4R4C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                  <input id='T4R5C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T4R5C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T4R5C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T4R5C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T4R5C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                  <input id='T4R6C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T4R6C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T4R6C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T4R6C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T4R6C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                  <input id='T4R7C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T4R7C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T4R7C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T4R7C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T4R7C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                  <input id='T4R8C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T4R8C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T4R8C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T4R8C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T4R8C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                  <div className="Row">
                  <input id='T4R9C1' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange1} readOnly/>
                    <input id='T4R9C2' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange2} readOnly/>
                    <input id='T4R9C3' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange3} readOnly/>
                    <input id='T4R9C4' className="Row-letter"aria-live="assertive" type="text" maxLength="1"  onChange={handleChange4} readOnly/>
                    <input id='T4R9C5' className="Row-letter"aria-live="assertive" type="text" maxLength="1" onChange={handleChange5} readOnly/>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Board