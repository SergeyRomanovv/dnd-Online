import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './style.module.css';


export default function RollDice() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});
  const [dices, setDices] = useState({});

  const [attrMasterTogle, setAttrMasterTogle] = useState({ view: style.masterPanel1, icon: 'fa-solid fa-chevron-down' });

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
    if (inputs.d20) {
      for (let i = 0; i < inputs.d20; i++) {
        sumd20.push(random(20));
      }
    }
    dispatch({ type: 'ROLL_DICE', payload: { d4: sumd4, d6: sumd6, d20: sumd20 } });
    // setDices((prev) => ({ ...prev, d4: sumd4, d6: sumd6, d20: sumd20 }));
    setInputs({});
  };


  // function attrTogleHundler() {
  //   if (attrMasterTogle.view === style.masterPanel) {
  //     setAttrMasterTogle({ view: style.masterPanel1, icon: 'fa-solid fa-chevron-down' });
  //   } else {
  //     setAttrMasterTogle({ view: style.masterPanel, icon: 'fa-solid fa-chevron-up' });
  //   }
  // }



  return (
    <>
      <div className={style.mainBox}>
        <div className={style.box}>
          <div className={style.diceBox}>
            <img src='../images/dices/d4y1.png' alt='dice4' />
            <input onChange={changeHandler} value={inputs.d4 || ''} type='number' name='d4' min='0' max='12' />
          </div>
          <div className={style.diceBox}>
            <img src='../images/dices/d6y1.png' alt='dice6' />
            <input onChange={changeHandler} value={inputs.d6 || ''} type='number' name='d6' min='0' max='12' />
          </div>
          <div className={style.diceBox}>
              <img src='../images/dices/d20y1.png' alt='dice20' />
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
