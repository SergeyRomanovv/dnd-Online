import React from 'react'
import { useState } from 'react'
import style from './style.module.css'
import {useSelector, useDispatch} from 'react-redux'
import BuilderPanel from '../BuilderPanel/BuilderPanel'

export default function Table() {
    console.log('Table')
    const dispatch = useDispatch();
    const gameMap = useSelector((store) => store.gameMap);
    const imgSrc = useSelector(store => store.tempImg);
    const [state, setState] = useState(gameMap)

    // console.log('beforeFunc=====>', gameMap)
    
    function changeHandler (e) {
        const x = e.target.parentNode.rowIndex
        const y = e.target.cellIndex
        // console.log('xy====>', x, y)
        dispatch({type: 'EDIT_MAP_EL', payload: {x, y, imgSrc}})
        setState((pre) => [...gameMap])
        // console.log('afterFunc=======>', gameMap)
    }
    console.log('localStateAfterFunc', state)

    const gameMap1 = gameMap.map(e => e)
    // console.log("==========>", gameMap1)

  return (
    <div className={style.gameBox}>
    <table onClick={(e)=> changeHandler(e)} className={style.tableBox}>
      <thead></thead>
      <tbody>
        {
        gameMap.map(e => <tr>{e.map(el => <td className={style.bgImg} style={{backgroundImage: `url(${el.bgImg})`}}></td>)}</tr>)
        }
      </tbody>
      <tfoot></tfoot>
    </table>
    <BuilderPanel />
    </div>
  )
}
