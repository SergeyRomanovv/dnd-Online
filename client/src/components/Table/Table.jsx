import React from 'react'
import { useState } from 'react'
import style from './style.module.css'

export default function Table() {
    const [gameMap, setGameMap] = useState([[0, 1, 2],[3, 4, 5],[6, 7, 8]]);
    console.log('beforeFunc=====>', gameMap)
    
    function changeHandler (e) {
        const x = e.target.parentNode.rowIndex
        const y = e.target.cellIndex

        setGameMap(() => {
            for (let i = 0; i < gameMap.length; i++) {
                for (let j = 0; j < gameMap[i].length; j++) {
                    if (i === x && j === y) {
                        console.log(gameMap[i][j])
                        gameMap[i][j] = 111
                        return gameMap
                    }
                }
            }
        })
        console.log('afterFunc=======>', gameMap)
    }

  return (
    <div className={style.gameBox}>
    <table onClick={(e)=> changeHandler(e)} className={style.tableBox}>
        {
        gameMap.map(e => <tr>{e.map(el => <td>{el}</td>)}</tr>)
        }
    </table>
    </div>
  )
}
