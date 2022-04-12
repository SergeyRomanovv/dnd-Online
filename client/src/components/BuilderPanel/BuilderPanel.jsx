import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css';

export default function BuilderPanel() {

  const ttt = useSelector(state => state.tempImg);
  const dispatch = useDispatch();
 
  const getSrcHundler= (e) => {
    const imgSrc = e.target.alt;
    dispatch({ type: 'GET_SRC', payload: imgSrc });
  }

  return (
    <div className={style.panel}>
      <div className={style.panelImages}>
        <img src="./Stone_x4_1.jpg" alt="./Stone_x4_1.jpg" tabindex="0" onClick={(e) => getSrcHundler(e)} />
      </div>
      <div className={style.panelImages}>
        <img src="./images/Sand_1.jpg" alt="./images/Sand_1.jpg" tabindex="0" onClick={(e) => getSrcHundler(e)} />
      </div>
      <div className={style.panelImages}>
        <img src="./images/Grass_1.jpg" alt="./images/Grass_1.jpg" tabindex="0" onClick={(e) => getSrcHundler(e)} />
      </div>
    </div>
  )
}


