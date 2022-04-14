import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css';
import axios from 'axios';
import RollDice from '../RollDice/RollDice';
import TestWS from '../TestWS/TestWS';

export default function GamePage() {
  const oneGame = useSelector(state => state.oneGame);

  const dispatch = useDispatch();
  const [allBoards, setAllBoards] = useState([]);
  const [oneGameBoard, setOneGameBoard] = useState([]);
  const [gameBoardCoordinates, setGameBoardCoordinates] = useState({});
  const [moveAttr, setMoveAttr] = useState({});
  const [imgSrc, setImgSrc] = useState('');

// ! ------------------------------Web Socket---------------------------------------
  const [isPaused, setIsPaused] = useState(false);
  const [response, setResponse] = useState("");
  const ws = useRef();

  useEffect(() => {
    if (!isPaused) {
      ws.current = new WebSocket("ws://localhost:3001/");
      ws.current.onopen = () => {
        console.log("Socket подключен");
      };
    }
    setTimeout(() => {
      ws.current.send(JSON.stringify(oneGame));
    }, 0);

    ws.current.onmessage = (event) => {
      setResponse(JSON.parse(event.data));
    };

    setIsPaused(true);
  }, [oneGame, isPaused]);
// ? ------------------------------Web Socket---------------------------------------
  
  const [togle, setTogle] = useState(style.footerPanel1);
  
  useEffect(() => {
    axios.get('http://localhost:3001/boards/all')
      .then((boardsFromServer) => {
        // console.log(boardsFromServer.data);
        setAllBoards(boardsFromServer.data);
      });
  }, []);

  const getGameHundler = (id) => {
    console.log(id);
    const game = JSON.parse(allBoards.filter(el => el.id === id)[0].board);
    dispatch({ type: 'SET_ONE_GAME', payload: game });
    // setOneGameBoard(game)
  };


  function setTDHandler(e) {
    const x = e.target.parentNode.rowIndex;
    const y = e.target.cellIndex;
    setGameBoardCoordinates({ x, y });
    console.log('xy', x, y, imgSrc);
    dispatch({ type: 'SET_ATTR', payload: { x, y, imgSrc } });
  }

  function masterHandler(e) {
    if (e.altKey) {
      const x = e.target.parentNode.parentNode.rowIndex;
      const y = e.target.parentNode.cellIndex;
      setGameBoardCoordinates({ x, y });
      // console.log('doubleclick x y', x, y, imgSrc);
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
      // console.log('set', setObj, 'del', delObj);
      dispatch({ type: 'DEL_ATTR', payload: delObj });
      dispatch({ type: 'SET_ATTR', payload: setObj });
      setMoveAttr({});
    }
  }

  function getImgSrcHundler(e) {
    setImgSrc(e.target.alt);
  }

  function togleHundler() {
    if (togle === style.footerPanel) {
      setTogle(style.footerPanel1)
      console.log(togle);
    } else {
      setTogle(style.footerPanel)
    }
  }

  console.log('*****************', oneGame);

  return (
    <>
      {/* <div className={style.topPanel}>top panel</div> */}
      <div className={style.gamePage}>
        <div className={style.leftSide}>
          <p>left side</p>
          <div className={style.chooseBoard}>
            <p>chosse board</p>
            {allBoards.map((board) => <button key={board.id} onClick={() => getGameHundler(board.id)}>{board.title}</button>)}
          </div>
        </div>
        <div className={style.mainSide}>
          <div className={style.gameBox}>
            <table className={style.tableBox} onClick={(e) => masterHandler(e)} onDoubleClick={(e) => setTDHandler(e)}>
              <thead></thead>
              <tbody>
                {response.length ?
                  response.map(e => <tr>{e.map(el => <td tabindex="0" className={style.bgImg} style={{ backgroundImage: `url(${el.bgImg})` }}>{el.attr
                    ? <img src={el.attr} alt={el.attr} style={{ backgroundColor: '#ffffff00', width: '65px' }} />
                    : <span></span>}</td>)}</tr>)
                  : <span>Chosse a game from left side</span>
                }
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </div>
        <div className={style.rightSide}>right side</div>
      </div>
      <div className={togle}>
        <button onClick={togleHundler} className={style.gamePanelBtn}>Game Panel ︽</button>
        <RollDice />
        <div className={style.attributies}>
          <img src="./images/items/Bonefire1.png" alt="./images/items/Bonefire1.png" tabindex="0" style={{ width: '60px' }} onClick={getImgSrcHundler} />
          <img src="./images/items/Elf2.png" alt="./images/items/Elf2.png" tabindex="0" style={{ width: '60px' }} onClick={getImgSrcHundler} />
          <img src="./images/items/Chest1.png" alt="./images/items/Chest1.png" tabindex="0" style={{ width: '60px' }} onClick={getImgSrcHundler} />
        </div>
      </div>
    </>
  )
}
