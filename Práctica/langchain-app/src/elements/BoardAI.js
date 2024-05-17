import React, { useEffect, useState, useContext } from 'react'
import CellAI from './CellAI';
import { AppContext } from '../App'

export const BoardContextAI = React.createContext();

function BoardAI() {
  const {enteredLetterAI} = useContext(AppContext);
  const [visitedRows, setVisitedRows] = useState([]);
  useEffect(() => {
  setVisitedRows(prevRows => [...prevRows, enteredLetterAI.row, enteredLetterAI.row + 9]);
}, [enteredLetterAI.row]);

  return (
    <div className="game_container-inner">
            <div className="game_boards">
              <div className="game_boards-row">
                <div className="row_field">
                  <div id='T1R1' className={`Row ${visitedRows.includes(1) ? '' : 'Row-current'}`}>
                    <CellAI id='T1R1C1' row={0} col={0}/>
                    <CellAI id='T1R1C2' row={0} col={1}/>
                    <CellAI id='T1R1C3' row={0} col={2}/>
                    <CellAI id='T1R1C4' row={0} col={3}/>
                    <CellAI id='T1R1C5' row={0} col={4}/>
                  </div>
                  <div id='T1R2' className={`Row ${enteredLetterAI.row === 1 ? 'Row-current' : ''}`}>
                    <CellAI id='T1R2C1' row={1} col={0}/>
                    <CellAI id='T1R2C2' row={1} col={1}/>
                    <CellAI id='T1R2C3' row={1} col={2}/>
                    <CellAI id='T1R2C4' row={1} col={3}/>
                    <CellAI id='T1R2C5' row={1} col={4}/>
                  </div>
                  <div id='T1R23' className={`Row ${enteredLetterAI.row === 2 ? 'Row-current' : ''}`}>
                    <CellAI id='T1R3C1' row={2} col={0}/>
                    <CellAI id='T1R3C2' row={2} col={1}/>
                    <CellAI id='T1R3C3' row={2} col={2}/>
                    <CellAI id='T1R3C4' row={2} col={3}/>
                    <CellAI id='T1R3C5' row={2} col={4}/>
                  </div>
                  <div id='T1R4' className={`Row ${enteredLetterAI.row === 3 ? 'Row-current' : ''}`}>
                    <CellAI id='T1R4C1' row={3} col={0}/>
                    <CellAI id='T1R4C2' row={3} col={1}/>
                    <CellAI id='T1R4C3' row={3} col={2}/>
                    <CellAI id='T1R4C4' row={3} col={3}/>
                    <CellAI id='T1R4C5' row={3} col={4}/>
                  </div>
                  <div id='T1R5' className={`Row ${enteredLetterAI.row === 4 ? 'Row-current' : ''}`}>
                    <CellAI id='T1R5C1' row={4} col={0}/>
                    <CellAI id='T1R5C2' row={4} col={1}/>
                    <CellAI id='T1R5C3' row={4} col={2}/>
                    <CellAI id='T1R5C4' row={4} col={3}/>
                    <CellAI id='T1R5C5' row={4} col={4}/>
                  </div>
                  <div id='T1R6' className={`Row ${enteredLetterAI.row === 5 ? 'Row-current' : ''}`}>
                    <CellAI id='T1R6C1' row={5} col={0}/>
                    <CellAI id='T1R6C2' row={5} col={1}/>
                    <CellAI id='T1R6C3' row={5} col={2}/>
                    <CellAI id='T1R6C4' row={5} col={3}/>
                    <CellAI id='T1R6C5' row={5} col={4}/>
                  </div>
                  <div id='T1R7' className={`Row ${enteredLetterAI.row === 6 ? 'Row-current' : ''}`}>
                    <CellAI id='T1R7C1' row={6} col={0}/>
                    <CellAI id='T1R7C2' row={6} col={1}/>
                    <CellAI id='T1R7C3' row={6} col={2}/>
                    <CellAI id='T1R7C4' row={6} col={3}/>
                    <CellAI id='T1R7C5' row={6} col={4}/>
                  </div>
                  <div id='T1R8' className={`Row ${enteredLetterAI.row === 7 ? 'Row-current' : ''}`}>
                    <CellAI id='T1R8C1' row={7} col={0}/>
                    <CellAI id='T1R8C2' row={7} col={1}/>
                    <CellAI id='T1R8C3' row={7} col={2}/>
                    <CellAI id='T1R8C4' row={7} col={3}/>
                    <CellAI id='T1R8C5' row={7} col={4}/>
                  </div>
                  <div id='T1R9' className={`Row ${enteredLetterAI.row === 8 ? 'Row-current' : ''}`}>
                    <CellAI id='T1R9C1' row={8} col={0}/>
                    <CellAI id='T1R9C2' row={8} col={1}/>
                    <CellAI id='T1R9C3' row={8} col={2}/>
                    <CellAI id='T1R9C4' row={8} col={3}/>
                    <CellAI id='T1R9C5' row={8} col={4}/>
                  </div>
                </div>
                <div className="row_field">
                <div id='T2R1' className={`Row ${visitedRows.includes(1) ? '' : 'Row-current'}`}>
                    <CellAI id='T2R1C1' row={0} col={5}/>
                    <CellAI id='T2R1C2' row={0} col={6}/>
                    <CellAI id='T2R1C3' row={0} col={7}/>
                    <CellAI id='T2R1C4' row={0} col={8}/>
                    <CellAI id='T2R1C5' row={0} col={9}/>
                  </div>
                  <div id='T2R2' className={`Row ${enteredLetterAI.row === 1 ? 'Row-current' : ''}`}>
                    <CellAI id='T2R2C1' row={1} col={5}/>
                    <CellAI id='T2R2C2' row={1} col={6}/>
                    <CellAI id='T2R2C3' row={1} col={7}/>
                    <CellAI id='T2R2C4' row={1} col={8}/>
                    <CellAI id='T2R2C5' row={1} col={9}/>
                  </div>
                  <div id='T2R3' className={`Row ${enteredLetterAI.row === 2 ? 'Row-current' : ''}`}>
                    <CellAI id='T2R3C1' row={2} col={5}/>
                    <CellAI id='T2R3C2' row={2} col={6}/>
                    <CellAI id='T2R3C3' row={2} col={7}/>
                    <CellAI id='T2R3C4' row={2} col={8}/>
                    <CellAI id='T2R3C5' row={2} col={9}/>
                  </div>
                  <div id='T2R4' className={`Row ${enteredLetterAI.row === 3 ? 'Row-current' : ''}`}>
                    <CellAI id='T2R4C1' row={3} col={5}/>
                    <CellAI id='T2R4C2' row={3} col={6}/>
                    <CellAI id='T2R4C3' row={3} col={7}/>
                    <CellAI id='T2R4C4' row={3} col={8}/>
                    <CellAI id='T2R4C5' row={3} col={9}/>
                  </div>
                  <div id='T2R5' className={`Row ${enteredLetterAI.row === 4 ? 'Row-current' : ''}`}>
                    <CellAI id='T2R5C1' row={4} col={5}/>
                    <CellAI id='T2R5C2' row={4} col={6}/>
                    <CellAI id='T2R5C3' row={4} col={7}/>
                    <CellAI id='T2R5C4' row={4} col={8}/>
                    <CellAI id='T2R5C5' row={4} col={9}/>
                  </div>
                  <div id='T2R6' className={`Row ${enteredLetterAI.row === 5 ? 'Row-current' : ''}`}>
                    <CellAI id='T2R6C1' row={5} col={5}/>
                    <CellAI id='T2R6C2' row={5} col={6}/>
                    <CellAI id='T2R6C3' row={5} col={7}/>
                    <CellAI id='T2R6C4' row={5} col={8}/>
                    <CellAI id='T2R6C5' row={5} col={9}/>
                  </div>
                  <div id='T2R7' className={`Row ${enteredLetterAI.row === 6 ? 'Row-current' : ''}`}>
                    <CellAI id='T2R7C1' row={6} col={5}/>
                    <CellAI id='T2R7C2' row={6} col={6}/>
                    <CellAI id='T2R7C3' row={6} col={7}/>
                    <CellAI id='T2R7C4' row={6} col={8}/>
                    <CellAI id='T2R7C5' row={6} col={9}/>
                  </div>
                  <div id='T2R8' className={`Row ${enteredLetterAI.row === 7 ? 'Row-current' : ''}`}>
                    <CellAI id='T2R8C1' row={7} col={5}/>
                    <CellAI id='T2R8C2' row={7} col={6}/>
                    <CellAI id='T2R8C3' row={7} col={7}/>
                    <CellAI id='T2R8C4' row={7} col={8}/>
                    <CellAI id='T2R8C5' row={7} col={9}/>
                  </div>
                  <div id='T2R9' className={`Row ${enteredLetterAI.row === 8 ? 'Row-current' : ''}`}>
                    <CellAI id='T2R9C1' row={8} col={5}/>
                    <CellAI id='T2R9C2' row={8} col={6}/>
                    <CellAI id='T2R9C3' row={8} col={7}/>
                    <CellAI id='T2R9C4' row={8} col={8}/>
                    <CellAI id='T2R9C5' row={8} col={9}/>
                  </div>
                </div>
              </div>
              <div className="game_boards-row">
                <div className="row_field">
                  <div id='T3R1' className={`Row ${visitedRows.includes(1) ? '' : 'Row-current'}`}>
                    <CellAI id='T3R1C1' row={9} col={0}/>
                    <CellAI id='T3R1C2' row={9} col={1}/>
                    <CellAI id='T3R1C3' row={9} col={2}/>
                    <CellAI id='T3R1C4' row={9} col={3}/>
                    <CellAI id='T3R1C5' row={9} col={4}/>
                  </div>
                  <div id='T3R2' className={`Row ${enteredLetterAI.row === 1 ? 'Row-current' : ''}`}>
                    <CellAI id='T3R2C1' row={10} col={0}/>
                    <CellAI id='T3R2C2' row={10} col={1}/>
                    <CellAI id='T3R2C3' row={10} col={2}/>
                    <CellAI id='T3R2C4' row={10} col={3}/>
                    <CellAI id='T3R2C5' row={10} col={4}/>
                  </div>
                  <div id='T3R3' className={`Row ${enteredLetterAI.row === 2 ? 'Row-current' : ''}`}>
                    <CellAI id='T3R3C1' row={11} col={0}/>
                    <CellAI id='T3R3C2' row={11} col={1}/>
                    <CellAI id='T3R3C3' row={11} col={2}/>
                    <CellAI id='T3R3C4' row={11} col={3}/>
                    <CellAI id='T3R3C5' row={11} col={4}/>
                  </div>
                  <div id='T3R4' className={`Row ${enteredLetterAI.row === 3 ? 'Row-current' : ''}`}>
                    <CellAI id='T3R4C1' row={12} col={0}/>
                    <CellAI id='T3R4C2' row={12} col={1}/>
                    <CellAI id='T3R4C3' row={12} col={2}/>
                    <CellAI id='T3R4C4' row={12} col={3}/>
                    <CellAI id='T3R4C5' row={12} col={4}/>
                  </div>
                  <div id='T3R5' className={`Row ${enteredLetterAI.row === 4 ? 'Row-current' : ''}`}>
                    <CellAI id='T3R5C1' row={13} col={0}/>
                    <CellAI id='T3R5C2' row={13} col={1}/>
                    <CellAI id='T3R5C3' row={13} col={2}/>
                    <CellAI id='T3R5C4' row={13} col={3}/>
                    <CellAI id='T3R5C5' row={13} col={4}/>
                  </div>
                  <div id='T3R6' className={`Row ${enteredLetterAI.row === 5 ? 'Row-current' : ''}`}>
                    <CellAI id='T3R6C1' row={14} col={0}/>
                    <CellAI id='T3R6C2' row={14} col={1}/>
                    <CellAI id='T3R6C3' row={14} col={2}/>
                    <CellAI id='T3R6C4' row={14} col={3}/>
                    <CellAI id='T3R6C5' row={14} col={4}/>
                  </div>
                  <div id='T3R7' className={`Row ${enteredLetterAI.row === 6 ? 'Row-current' : ''}`}>
                    <CellAI id='T3R7C1' row={15} col={0}/>
                    <CellAI id='T3R7C2' row={15} col={1}/>
                    <CellAI id='T3R7C3' row={15} col={2}/>
                    <CellAI id='T3R7C4' row={15} col={3}/>
                    <CellAI id='T3R7C5' row={15} col={4}/>
                  </div>
                  <div id='T3R8' className={`Row ${enteredLetterAI.row === 7 ? 'Row-current' : ''}`}>
                    <CellAI id='T3R8C1' row={16} col={0}/>
                    <CellAI id='T3R8C2' row={16} col={1}/>
                    <CellAI id='T3R8C3' row={16} col={2}/>
                    <CellAI id='T3R8C4' row={16} col={3}/>
                    <CellAI id='T3R8C5' row={16} col={4}/>
                  </div>
                  <div id='T3R9' className={`Row ${enteredLetterAI.row === 8 ? 'Row-current' : ''}`}>
                    <CellAI id='T3R9C1' row={17} col={0}/>
                    <CellAI id='T3R9C2' row={17} col={1}/>
                    <CellAI id='T3R9C3' row={17} col={2}/>
                    <CellAI id='T3R9C4' row={17} col={3}/>
                    <CellAI id='T3R9C5' row={17} col={4}/>
                  </div>
                </div>
                <div className="row_field">
                  <div id='T4R1' className={`Row ${visitedRows.includes(1) ? '' : 'Row-current'}`}>
                    <CellAI id='T4R1C1' row={9} col={5}/>
                    <CellAI id='T4R1C2' row={9} col={6}/>
                    <CellAI id='T4R1C3' row={9} col={7}/>
                    <CellAI id='T4R1C4' row={9} col={8}/>
                    <CellAI id='T4R1C5' row={9} col={9}/>
                  </div>
                  <div id='T4R2' className={`Row ${enteredLetterAI.row === 1 ? 'Row-current' : ''}`}>
                    <CellAI id='T4R2C1' row={10} col={5}/>
                    <CellAI id='T4R2C2' row={10} col={6}/>
                    <CellAI id='T4R2C3' row={10} col={7}/>
                    <CellAI id='T4R2C4' row={10} col={8}/>
                    <CellAI id='T4R2C5' row={10} col={9}/>
                  </div>
                  <div id='T4R3' className={`Row ${enteredLetterAI.row === 2 ? 'Row-current' : ''}`}>
                    <CellAI id='T4R3C1' row={11} col={5}/>
                    <CellAI id='T4R3C2' row={11} col={6}/>
                    <CellAI id='T4R3C3' row={11} col={7}/>
                    <CellAI id='T4R3C4' row={11} col={8}/>
                    <CellAI id='T4R3C5' row={11} col={9}/>
                  </div>
                  <div id='T4R4' className={`Row ${enteredLetterAI.row === 3 ? 'Row-current' : ''}`}>
                    <CellAI id='T4R4C1' row={12} col={5}/>
                    <CellAI id='T4R4C2' row={12} col={6}/>
                    <CellAI id='T4R4C3' row={12} col={7}/>
                    <CellAI id='T4R4C4' row={12} col={8}/>
                    <CellAI id='T4R4C5' row={12} col={9}/>
                  </div>
                  <div id='T4R5' className={`Row ${enteredLetterAI.row === 4 ? 'Row-current' : ''}`}>
                    <CellAI id='T4R5C1' row={13} col={5}/>
                    <CellAI id='T4R5C2' row={13} col={6}/>
                    <CellAI id='T4R5C3' row={13} col={7}/>
                    <CellAI id='T4R5C4' row={13} col={8}/>
                    <CellAI id='T4R5C5' row={13} col={9}/>
                  </div>
                  <div id='T4R6' className={`Row ${enteredLetterAI.row === 5 ? 'Row-current' : ''}`}>
                    <CellAI id='T4R6C1' row={14} col={5}/>
                    <CellAI id='T4R6C2' row={14} col={6}/>
                    <CellAI id='T4R6C3' row={14} col={7}/>
                    <CellAI id='T4R6C4' row={14} col={8}/>
                    <CellAI id='T4R6C5' row={14} col={9}/>
                  </div>
                  <div id='T4R7' className={`Row ${enteredLetterAI.row === 6 ? 'Row-current' : ''}`}>
                    <CellAI id='T4R7C1' row={15} col={5}/>
                    <CellAI id='T4R7C2' row={15} col={6}/>
                    <CellAI id='T4R7C3' row={15} col={7}/>
                    <CellAI id='T4R7C4' row={15} col={8}/>
                    <CellAI id='T4R7C5' row={15} col={9}/>
                  </div>
                  <div id='T4R8'className={`Row ${enteredLetterAI.row === 7 ? 'Row-current' : ''}`}>
                    <CellAI id='T4R8C1' row={16} col={5}/>
                    <CellAI id='T4R8C2' row={16} col={6}/>
                    <CellAI id='T4R8C3' row={16} col={7}/>
                    <CellAI id='T4R8C4' row={16} col={8}/>
                    <CellAI id='T4R8C5' row={16} col={9}/>
                  </div>
                  <div id='T4R9'className={`Row ${enteredLetterAI.row === 8 ? 'Row-current' : ''}`}>
                    <CellAI id='T4R9C1' row={17} col={5}/>
                    <CellAI id='T4R9C2' row={17} col={6}/>
                    <CellAI id='T4R9C3' row={17} col={7}/>
                    <CellAI id='T4R9C4' row={17} col={8}/>
                    <CellAI id='T4R9C5' row={17} col={9}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default BoardAI