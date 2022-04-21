import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './style.module.css';


export default function RollDice() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});

  const changeHandler = (e) => {
    if (e.target.value < 0) e.target.value = 0;
    if (e.target.value > 12) e.target.value = 12;
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const random = (edges) => {
    return Math.floor(Math.random() * edges + 1);
  };

  const diceHandler = () => {
    let sumd4 = [];
    let sumd6 = [];
    let sumd8 = [];
    let sumd10 = [];
    let sumd100 = [];
    let sumd12 = [];
    let sumd20 = [];
    if (inputs.d4) {
      for (let i = 0; i < inputs.d4; i++) {
        sumd4.push(random(4));
      }
    }
    if (inputs.d6) {
      for (let i = 0; i < inputs.d6; i++) {
        sumd6.push(random(6));
      }
    }
    if (inputs.d8) {
      for (let i = 0; i < inputs.d8; i++) {
        sumd8.push(random(8));
      }
    }
    if (inputs.d10) {
      for (let i = 0; i < inputs.d10; i++) {
        sumd10.push(random(10));
      }
    }
    if (inputs.d100) {
      for (let i = 0; i < inputs.d100; i++) {
        sumd100.push(random(10) * 10);
      }
    }
    if (inputs.d12) {
      for (let i = 0; i < inputs.d12; i++) {
        sumd12.push(random(12));
      }
    }
    if (inputs.d20) {
      for (let i = 0; i < inputs.d20; i++) {
        sumd20.push(random(20));
      }
    }
    dispatch({ type: 'ROLL_DICE', payload: { d4: sumd4, d6: sumd6, d8: sumd8, d10: sumd10, d100: sumd100, d12: sumd12, d20: sumd20 } });
    setInputs({});
  };

  return (
    <>
      <div className={style.mainBox}>
        <div className={style.box}>
          <div className={style.diceBox}>
            <img src='../images/dices/1.png' alt='dice4' />
            <input onChange={changeHandler} value={inputs.d4 || ''} type='number' name='d4' min='0' max='12' />
          </div>
          <div className={style.diceBox}>
            <img src='../images/dices/2.png' alt='dice6' />
            <input onChange={changeHandler} value={inputs.d6 || ''} type='number' name='d6' min='0' max='12' />
          </div>
          <div className={style.diceBox}>
            <img src='../images/dices/3.png' alt='dice8' />
            <input onChange={changeHandler} value={inputs.d8 || ''} type='number' name='d8' min='0' max='12' />
          </div>
          <div className={style.diceBox}>
            <img src='../images/dices/4.png' alt='dice10' />
            <input onChange={changeHandler} value={inputs.d10 || ''} type='number' name='d10' min='0' max='12' />
          </div>
          <div className={style.diceBox}>
            <img src='../images/dices/7.png' alt='dice100' />
            <input onChange={changeHandler} value={inputs.d100 || ''} type='number' name='d100' min='0' max='12' />
          </div>
          <div className={style.diceBox}>
            <img src='../images/dices/5.png' alt='dice12' />
            <input onChange={changeHandler} value={inputs.d12 || ''} type='number' name='d12' min='0' max='12' />
          </div>
          <div className={style.diceBox}>
            <img src='../images/dices/6.png' alt='dice20' />
            <input onChange={changeHandler} value={inputs.d20 || ''} type='number' name='d20' min='0' max='12' />
          </div>
          <div className={style.resultBox}>
            <button onClick={diceHandler} >Roll</button>
          </div>
        </div>
      </div>
    </>
  )
}
