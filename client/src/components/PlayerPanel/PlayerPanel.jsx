import React, {useState} from 'react';
import RollDice from '../RollDice/RollDice';
import style from './style.module.css';

export default function PlayerPanel() {

  const [playerPanelTogle, setPlayerPanelTogle] = useState({view: style.playerPanel1, icon: 'fa-solid fa-chevron-down'});


  function playerPanelTogleHundler() {
    if (playerPanelTogle.view === style.playerPanel) {
      console.log('+++++++++++', playerPanelTogle)
      setPlayerPanelTogle({view: style.playerPanel1, icon: 'fa-solid fa-chevron-up' });
    } else {
      console.log('+++++++++++', playerPanelTogle);
      setPlayerPanelTogle({ view: style.playerPanel, icon: 'fa-solid fa-chevron-down' });
    }
  }

  // console.log('-----------', playerPanelTogle)

  return (
    <div className={playerPanelTogle.view}>
      <div>
      <button onClick={playerPanelTogleHundler} className={style.playerToggleBtn}><span className={style.attrIconText}>Player Panel</span> <i class={playerPanelTogle.icon}></i></button>
      </div>
      <div className={style.mainPanel}>
        <RollDice />
      </div>
    </div>
  )
}

