import { SliderInput } from '@mui/material';
import React, { useState } from 'react';
import style from './style.module.css'

export default function RollDice() {
  const [inputs, setInputs] = useState({});
  const [dices, setDices] = useState({});
  const [attrMasterTogle, setAttrMasterTogle] = useState({view: style.masterPanel1, icon: 'fa-solid fa-chevron-down'});

  const changeHandler = (e) => {
    if (e.target.value < 0) e.target.value = 0;
    if (e.target.value > 12) e.target.value = 12;
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    // console.log(inputs);
  }

  const random = (edges) => {
    return Math.floor(Math.random() * edges + 1)
  }

  const diceHandler = () => {
    // let allSum = []
    let sumd4 = []
    let sumd6 = []
    let sumd20 = []
    if (inputs.d4) {
      for (let i = 0; i < inputs.d4; i++) {
        sumd4.push(random(4))
      }
    }
    if (inputs.d6) {
      for (let i = 0; i < inputs.d6; i++) {
        sumd6.push(random(6))
      }
    }
    if (inputs.d20) {
      for (let i = 0; i < inputs.d20; i++) {
        sumd20.push(random(20))
      }
    }
    // return `D3:${sumd3}\n D6:${sumd6}\n D20${sumd20}`
    // console.log(` Трёхгранный:${sumd3}\n Шестигранный:${sumd6}\n Двадцатигранник:${sumd20}`);
    setDices((prev) => ({ ...prev, d4: sumd4, d6: sumd6, d20: sumd20 }))
    console.log(dices.d4)
    setInputs({})
  }
  // console.log(diceHandler());
  // console.log(dices);
  function attrTogleHundler() {
    if (attrMasterTogle.view === style.masterPanel) {
      setAttrMasterTogle({view: style.masterPanel1, icon: 'fa-solid fa-chevron-down'});
    } else {
      setAttrMasterTogle({view: style.masterPanel, icon: 'fa-solid fa-chevron-up'});
    }
  }

  console.log('errtre', attrMasterTogle);


  return (
    <>
      <div className={attrMasterTogle.view}>
        
      
      {/* <div><button onClick={attrTogleHundler} className={style.attrToggleBtn}><span className={style.attrIconText}>Builder Panel</span> <i class={attrMasterTogle.icon}></i></button></div> */}
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
        </div>
        <div className={style.resultBox}>
          <button onClick={diceHandler} >Roll</button>
          {dices.d4?.length > 0 ? <div>D4: {dices.d4.sort((a, b) => a - b).map(e => `${e} `)}</div> : null}
          {dices.d6?.length > 0 ? <div>D6: {dices.d6.sort((a, b) => a - b).map(e => `${e} `)}</div> : null}
          {dices.d20?.length > 0 ? <div>D20: {dices.d20.sort((a, b) => a - b).map(e => `${e} `)}</div> : null}
        </div>
      </div>
      </div>
    </>
  )
}
