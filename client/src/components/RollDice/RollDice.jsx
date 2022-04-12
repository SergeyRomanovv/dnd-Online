import { SliderInput } from '@mui/material';
import React, { useState } from 'react'

export default function RollDice() {
  const [inputs, setInputs] = useState({})
  const [dices, setDices] = useState({})

  const changeHandler = (e) => {
    if (e.target.value < 0) e.target.value = 0;
    if (e.target.value > 12) e.target.value = 12;
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    // console.log(inputs);
  }
  const randomD3 = Math.floor(Math.random() * 3 + 1)
  const randomD6 = Math.floor(Math.random() * 6 + 1)
  const randomD20 = Math.floor(Math.random() * 20 + 1)

  const diceHandler = () => {
    // let allSum = []
    let sumd3 = []
    let sumd6 = []
    let sumd20 = []
    if (inputs.d3) {
      for (let i = 0; i < inputs.d3; i++) {
        sumd3.push(`\nDice ${i + 1} : ===> ` + Math.floor(Math.random() * 3 + 1))
      }
    }
    if (inputs.d6) {
      for (let i = 0; i < inputs.d6; i++) {
        sumd6.push(`Dice ${i + 1} : ===> ${Math.floor(Math.random() * 6 + 1)},`)
      }
    }
    if (inputs.d20) {
      for (let i = 0; i < inputs.d20; i++) {
        sumd20.push(`\nDice ${i + 1} : ===> ` + Math.floor(Math.random() * 20 + 1))
      }
    }
    // return `D3:${sumd3}\n D6:${sumd6}\n D20${sumd20}`
    // console.log(` Трёхгранный:${sumd3}\n Шестигранный:${sumd6}\n Двадцатигранник:${sumd20}`);
    setDices((prev) => ({ ...prev, d3: sumd3, d6: sumd6, d20: sumd20 }))
    setInputs({})
  }
  // console.log(diceHandler());
  // console.log(dices);


  return (
    <>
      {dices.d3 ? <div>D3:{dices.d3}</div> : null}
      {dices.d6 ? <div>D6:{dices.d6}</div> : null}
      {dices.d20 ? <div>D20:{dices.d20}</div> : null}
      <div className='d3'>
        <input onChange={changeHandler} value={inputs.d3 || ''} type='number' name='d3' min='0' max='12' />
        <img src='./images/images.jpeg' />
      </div>
      <div className='d6'>
        <input onChange={changeHandler} value={inputs.d6 || ''} type='number' name='d6' min='0' max='12' />
        <img src='./images/images.jpeg' />
      </div>
      <div className='d20'>
        <input onChange={changeHandler} value={inputs.d20 || ''} type='number' name='d20' min='0' max='12' />
        <img src='./images/images.jpeg' />
      </div>
      <button onClick={diceHandler} >Roll</button>
      {dices.d3 ? <div>D3:{dices.d3}</div> : null}
      {dices.d6 ? <div>D6:{dices.d6}</div> : null}
      {dices.d20 ? <div>D20:{dices.d20}</div> : null}
    </>
  )
}
