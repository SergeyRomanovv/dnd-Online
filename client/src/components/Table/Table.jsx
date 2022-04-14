import React from 'react'
import { useState, useEffect } from 'react'
import style from './style.module.css'
import {useSelector, useDispatch} from 'react-redux'
import BuilderPanel from '../BuilderPanel/BuilderPanel'
import RollDice from '../RollDice/RollDice';
import axios from 'axios';

export default function Table() {
    console.log('Table')
    const dispatch = useDispatch();
    const gameMap = useSelector((store) => store.gameMap);
    const imgSrc = useSelector(store => store.tempImg);
    const [state, setState] = useState(gameMap);
    const [size, setSize] = useState({});
    const [blockItems, setBlockItems] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:3001/builder')
        .then((res) => {
          setBlockItems(res.data)
        })
    }, []);

    // console.log('5555555555555555555555555555', blockItems);
    
    function changeHandler (e) {
        const x = e.target.parentNode.rowIndex
        const y = e.target.cellIndex
        // console.log('xy====>', x, y)
        dispatch({type: 'EDIT_MAP_EL', payload: {x, y, imgSrc}})
        setState((pre) => [...gameMap])
        // console.log('afterFunc=======>', gameMap)
    }

    function sizeHundler (e) {
      console.log(e.target.value);
      if (e.target.value < 1) e.target.value = 1;
      if (e.target.value > 16) e.target.value = 16;
      setSize((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    console.log('generate', size);

    function generateHundler (e, obj) {
      e.preventDefault();
      console.log('zachemmmmmmmmmmmmmmmmmmmm');
      const { row, coll } = obj;
      let table = [];
      let tdId = 1
      for (let i = 0; i < row; i++ ) {
        let oneRow = [];
        for (let j = 0; j < coll; j++) {
          oneRow.push({ id: tdId, bgImg: './images/Sand_1.jpg'});
          tdId++;
        }
        table.push(oneRow);
      }
      dispatch({ type: 'GENERATE_BOARD', payload: table})
      setSize({});
    }

    function generateRandomHundler(e, obj) {
      e.preventDefault();
      console.log('zachemmmmmmmmmmmmmmmmmmmm');
      const { row, coll } = obj;
      let table = [];
      let tdId = 1
      for (let i = 0; i < row; i++ ) {
        let oneRow = [];
        for (let j = 0; j < coll; j++) {
          const num = Math.floor(Math.random() * blockItems.length);
          oneRow.push({ id: tdId, bgImg: blockItems[num].url});
          tdId++;
        }
        table.push(oneRow);
      }
      dispatch({ type: 'GENERATE_BOARD', payload: table})
    }

    console.log('ttttttttttttttt', gameMap);

  return (
    <div className={style.mainBox}>
      <div>
        <form className={style.generateBox}>
          <label htmlFor="row">rows</label>
          <input type="number" id='row' name="row" value={size.row || ''} min='1' max='16' onChange={(e) => sizeHundler(e)} />
          <label htmlFor="coll">colls</label>
          <input type="number" id='coll' name="coll" value={size.coll || ''} min='1' max='16' onChange={(e) => sizeHundler(e)} />
          <button onClick={(e) => generateHundler (e, size)}>Generate</button>
          <button onClick={(e) => generateRandomHundler (e, size)}>Generate Random</button>
        </form>
      </div>
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
    </div>
    <BuilderPanel />
    </div>
  )
}
