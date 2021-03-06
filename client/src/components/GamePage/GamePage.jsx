import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css';
import axios from 'axios';
import Room from '../Room/Room';
import io from 'socket.io-client';
import GameMasterPanel from '../GameMasterPanel/GameMasterPanel';
import PlayerPanel from '../PlayerPanel/PlayerPanel';
let socket;

export default function GamePage() {
  const oneGame = useSelector(state => state.oneGame);
  const playerHero = useSelector((store) => store.selectHero);
  const rollState = useSelector((store) => store.rollDice);
  const dispatch = useDispatch();
  const [allBoards, setAllBoards] = useState([]);
  const [gameBoardCoordinates, setGameBoardCoordinates] = useState({});
  const [moveAttr, setMoveAttr] = useState({});
  const [imgSrc, setImgSrc] = useState('');

  // ! ---------------------------Soket IO------------------------------------------
  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState([]);
  const [renderMap, setRenderMap] = useState([]);
  const [rerenderMap, setRerenderMap] = useState([]);
  const [rollResult, setRollResult] = useState({});
  const socketUrl = 'http://localhost:3001';

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const urlParamUser = params.get('name');
    const urlParamRoom = params.get('room');

    setUser(urlParamUser);
    setRoom(urlParamRoom);


    socket = io(socketUrl);



    socket.emit('join', { urlParamUser, urlParamRoom }, (err) => {
      if (err) {
        console.error(err);
      }
    });

    return () => {
      // User leaves room
      socket.disconnect();

      socket.off();
    };

  }, [socketUrl, window.location.search]);

  useEffect(() => {
    socket.emit('sendMapToServer', { oneGame });
  }, [oneGame]);

  useEffect(() => {
    socket.emit('sendRollToServer', { rollState });
  }, [rollState]);

  useEffect(() => {
    socket.emit('sendRerenderMapToServer', { rerenderMap });
  }, [rerenderMap]);

  useEffect(() => {
    socket.on('sendMapFromServer', data => {
      setRenderMap(data.map);
    });

    socket.on('roomMembers', usrs => {
      setUsers(usrs);
    });

  }, [oneGame]);

  useEffect(() => {
    socket.on('sendRerenderMapFromServer', data => {
      if (localStorage.getItem("isGM") === 'true') {
        let game = data.map;
        dispatch({ type: 'SET_ONE_GAME', payload: game });
      } else {
        setRenderMap(data.map);
      }
    });

  }, [rerenderMap]);

  useEffect(() => {
    socket.on('sendRollFromServer', data => {
      setRollResult(data);
    });
  }, [rollState]);

  // ? ---------------------------Soket IO------------------------------------------

  useEffect(() => {
    const userName = localStorage.getItem('userName');
    axios.post('http://localhost:3001/boards/all', { userName })
      .then((boardsFromServer) => {
        setAllBoards(boardsFromServer.data);
      });
  }, []);

  const getGameHundler = (id) => {
    const game = JSON.parse(allBoards.filter(el => el.id === id)[0].board);
    dispatch({ type: 'SET_ONE_GAME', payload: game });
  };


  function setTDHandler(e) {
    if (localStorage.getItem("isGM") === 'true') {
      const x = e.target.parentNode.rowIndex;
      const y = e.target.cellIndex;
      setGameBoardCoordinates({ x, y });
      dispatch({ type: 'SET_ATTR', payload: { x, y, imgSrc } });
    } else {
      const heroUrl = playerHero;

      const x = e.target.parentNode.rowIndex;
      const y = e.target.cellIndex;

      let playerTempMap = JSON.parse(JSON.stringify(renderMap));
      playerTempMap[x][y] = { ...playerTempMap[x][y], attr: heroUrl };

      setRerenderMap(playerTempMap);
    }
  }

  function masterHandler(e) {
    if (localStorage.getItem("isGM") === 'true') {

      if (e.altKey) {
        const x = e.target.parentNode.parentNode.rowIndex;
        const y = e.target.parentNode.cellIndex;
        setGameBoardCoordinates({ x, y });
        dispatch({ type: 'DEL_ATTR', payload: { x, y, imgSrc: '' } });
      } else if (e.shiftKey) {
        const x = e.target.parentNode.parentNode.rowIndex;
        const y = e.target.parentNode.cellIndex;
        const imgSrc = e.target.alt;
        setMoveAttr({ x, y, imgSrc });
        // dispatch({ type: 'DEL_ATTR', payload: { x, y, imgSrc: '' } });
      } else if (e.ctrlKey) {
        const { x, y, imgSrc } = moveAttr;
        const xx = e.target.parentNode.rowIndex;
        const yy = e.target.cellIndex;
        const setObj = { x: xx, y: yy, imgSrc };
        const delObj = { x, y, imgSrc: '' };
        dispatch({ type: 'DEL_ATTR', payload: delObj });
        dispatch({ type: 'SET_ATTR', payload: setObj });
        setMoveAttr({});
      }
    } else {
      if (e.altKey) {
        const x = e.target.parentNode.parentNode.rowIndex;
        const y = e.target.parentNode.cellIndex;
        let playerTempMap = JSON.parse(JSON.stringify(renderMap));
        if (playerTempMap[x][y].attr === playerHero) {
          playerTempMap[x][y] = { ...playerTempMap[x][y], attr: '' };
          setRerenderMap(playerTempMap);
        } else {
          return;
        }
      }
    }
  }

  function getImgSrcHundler(e) {
    setImgSrc(e.target.alt);
  }

  return (
    <>
      <div className={style.gamePage}>
        <div className={style.leftSide}>
          {<div className={rollResult.roll !== undefined ? style.diceMainBox : style.diceMainBoxNone}>
            <div className={style.usersNames}><span><strong>{rollResult.user}</strong></span></div>
            {rollResult.roll?.d4?.length > 0 ? <div className={style.diceRes}><strong>D4:</strong> {rollResult.roll.d4.sort((a, b) => a - b).map(e => `${e} `)}</div> : null}
            {rollResult.roll?.d6?.length > 0 ? <div className={style.diceRes}><strong>D6:</strong> {rollResult.roll.d6.sort((a, b) => a - b).map(e => `${e} `)}</div> : null}
            {rollResult.roll?.d8?.length > 0 ? <div className={style.diceRes}><strong>D8:</strong> {rollResult.roll.d8.sort((a, b) => a - b).map(e => `${e} `)}</div> : null}
            {rollResult.roll?.d10?.length > 0 ? <div className={style.diceRes}><strong>D10:</strong> {rollResult.roll.d10.sort((a, b) => a - b).map(e => `${e} `)}</div> : null}
            {rollResult.roll?.d100?.length > 0 ? <div className={style.diceRes}><strong>D100:</strong> {rollResult.roll.d100.sort((a, b) => a - b).map(e => `${e} `)}</div> : null}
            {rollResult.roll?.d12?.length > 0 ? <div className={style.diceRes}><strong>D12:</strong> {rollResult.roll.d12.sort((a, b) => a - b).map(e => `${e} `)}</div> : null}
            {rollResult.roll?.d20?.length > 0 ? <div className={style.diceRes}><strong>D20:</strong> {rollResult.roll.d20.sort((a, b) => a - b).map(e => `${e} `)}</div> : null}
          </div>}
          {
            localStorage.getItem("isGM") === 'true' ?
              (
                <div className={style.chooseBoard}>
                  <h3 style={{color: '#ffffff'}}>Game Boards</h3>
                  {allBoards.map((board) => <button key={board.id} onClick={() => getGameHundler(board.id)}>{board.title}</button>)}
                </div>
              ) : (
                <span></span>
              )
          }
        </div>




        <div className={style.mainSide}>
          <div className={style.gameBox}>
            <table className={style.tableBox} onClick={(e) => masterHandler(e)} onDoubleClick={(e) => setTDHandler(e)}>
              <thead></thead>
              <tbody>
                {renderMap.length ?
                  renderMap.map(e => <tr>{e.map(el => <td tabIndex="0" className={style.bgImg} style={{ backgroundImage: `url(${el.bgImg})` }}>{el.attr
                    ? <img src={el.attr} alt={el.attr} style={{ backgroundColor: '#ffffff00', width: '65px' }} />
                    : <span></span>}</td>)}</tr>)
                  : <span className={style.headerspan}>Chosse a game field from left side</span>
                }
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </div>
        <div className={style.rightSide}>
          <Room />
        </div>
      </div>
      {
        localStorage.getItem("isGM") === 'true' ?
          <GameMasterPanel getImgSrcHundler={getImgSrcHundler} /> :
          <PlayerPanel />
      }
    </>
  )
}
