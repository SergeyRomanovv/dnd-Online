import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import style from '../GamePage/style.module.css';

function TestWS() {
  const oneGame = useSelector(state => state.oneGame);
  const [isPaused, setIsPaused] = useState(false);
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const ref = useRef();
  const ws = useRef();

  const submitHeandler = (e) => {
    e.preventDefault();
    setInput(ref.current.value);
  };

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
  console.log( response);
  return (
    <>
      <input name="input" type="text" ref={ref} />
      <button onClick={submitHeandler}>Тык</button>
      <div className={style.gameBox}>
            <table className={style.tableBox}>
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
    </>
  );
}

export default TestWS;
