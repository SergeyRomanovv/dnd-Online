import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css';
import axios from 'axios' 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BuilderPanel() {
  const [blackItems, setBlockItems] = useState([]);
  const gameMap = useSelector((store) => store.gameMap);
  const boardtitle = useSelector((store) => store.boardtitle);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3001/builder')
    .then((res) => {
      setBlockItems(res.data)
    })
  }, []);

  const ttt = useSelector(state => state.tempImg);
  
  const getSrcHundler= (e) => {
    const imgSrc = e.target.alt;
    // console.log('rrrrrrrrrrrrrrrrrrrrr', imgSrc);
    dispatch({ type: 'GET_SRC', payload: imgSrc });
  }

  const saveHandler = async () => {
    const response = await axios.post('http://localhost:3001/builder/save', {board: gameMap, boardtitle});
    // dispatch({ type: 'SET_BOARD_TITLE', payload: '' });
    navigate('/');
  }

  const titleHandler = (ev) => {
    dispatch({ type: 'SET_BOARD_TITLE', payload: {[ev.target.name]: ev.target.value} });
  }

  return (
    <div className={style.panel}>
      {
        blackItems.map(el => (
          <div key={el.id} className={style.panelImages}>
            <img src={el.url} alt={el.url} tabindex="0" onClick={getSrcHundler} />
            <div className={style.title}>{el.title}</div>
          </div>
        ))
      }
      <div className={style.btnBox}>
        
        <input type="text" name='title' value={boardtitle.title || ''} onChange={titleHandler} />
        <button className={style.btn} onClick={saveHandler}>SAVE</button>
        
      </div>
    </div>
  )
}


