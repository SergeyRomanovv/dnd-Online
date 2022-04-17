import React, { useState } from 'react';
import style from './style.module.css';
import Proverka from '../Proverka/Proverka';
import AttrPanel from '../AttrPanel/AttrPanel';
import RollDice from '../RollDice/RollDice';

export default function GameMasterPanel({getImgSrcHundler}) {

  const [attrMasterTogle, setAttrMasterTogle] = useState({view: style.footerPanel, icon: 'fa-solid fa-chevron-down'});
  const [proverkaTogle, setProverkaTogle] = useState(style.masterPanel);
  const [diceTogle, setDiceTogle] = useState(style.dicePanel)


  function gmPanelTogleHundler() {
    if (attrMasterTogle.view === style.footerPanel) {
      setAttrMasterTogle({view: style.footerPanel1, icon: 'fa-solid fa-chevron-up' });
    } else {
      setAttrMasterTogle({ view: style.footerPanel, icon: 'fa-solid fa-chevron-down' });
    }
  }

  function proverkaTogleHundler() {
    if (proverkaTogle === style.masterPanel) {
      setProverkaTogle(style.masterPanel1);
      setDiceTogle(style.dicePanel1);
      console.log(1, proverkaTogle );
    } else {
      setProverkaTogle(style.masterPanel);
      setDiceTogle(style.dicePanel);
      console.log(2, proverkaTogle );
    }
  }

  function diceTogleHundler() {
    if (diceTogle === style.dicePanel) {
      setDiceTogle(style.dicePanel1);
      setProverkaTogle(style.masterPanel1);
      console.log(1, diceTogle );
    } else {
      setDiceTogle(style.dicePanel);
      setProverkaTogle(style.masterPanel);
      console.log(2, diceTogle );
    }
  }

  return (
    <div className={attrMasterTogle.view}>
      <div>
      <button onClick={gmPanelTogleHundler} className={style.attrToggleBtn}><span className={style.attrIconText}>Game Master Panel</span> <i class={attrMasterTogle.icon}></i></button>
      </div>
      <div className={style.btns}>
        <button onClick={proverkaTogleHundler}>attr</button>
        <button onClick={diceTogleHundler}>dices</button>
      </div>
      <div className={style.doubleBox}>
        <div className={proverkaTogle}>
        <AttrPanel getImgSrcHundler={getImgSrcHundler} />
        {/* <RollDice /> */}
        </div>
        <div className={diceTogle}>
        {/* <AttrPanel getImgSrcHundler={getImgSrcHundler}/> */}
        <RollDice />
        </div>
      </div>
    </div>
  )
}

