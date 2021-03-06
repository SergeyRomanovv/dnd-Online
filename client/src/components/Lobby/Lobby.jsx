import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import style from './style.module.css';
import axios from 'axios';

function Lobby() {
  const name = useSelector((store) => store.user);
  const [room, setRoom] = useState("");
  const [visibl, setVisibl] = useState('hidden');
  const [heroes, setHeroes] = useState([]);
  const [heroName, setHeroName] = useState('');

  const dispatch = useDispatch(); 

  useEffect(() => {
    axios.get(`http://localhost:3001/heroes`)
      .then((res) => {
        setHeroes(res.data);
      });
  }, []);

  const getHeroHundler = (e) => {
    dispatch({ type: 'PLAYER_HERO', payload: e.target.alt });
    setHeroName(e.target.title);
    setVisibl('visible');
  };

  localStorage.setItem('userName', name);
  return (
    <>
      <div className={style.lobbyBox}>
        <div className={style.heroesBox}>
          <div className={style.h1Box}>
          <h1>Select a character</h1>
          </div>
          <div className={style.imgBox}>
            {heroes.map(pic => <div key={pic.id} id={pic.id} className={style.oneHero}> <span>{pic.title}</span> <img src={pic.url} alt={pic.url} tabIndex="0" title={pic.title} onClick={getHeroHundler} /> </div> )}
          </div>
          <h3 style={{visibility: visibl}}>Your hero is {heroName}</h3>
        </div>
        <div className={style.roomBox} style={{visibility: visibl}}>
          <h1>Select a room</h1>
          <form method="post" className={style.formGroup}>
            <div>
              <input onChange={(e) => setRoom(e.target.value)} type="text" placeholder="Room" required />
            </div>
            <Link
              onClick={(e) => (!name || !room ? e.preventDefault() : null)}
              to={`/game/?name=${name}&room=${room}`}
            >
              <input type="submit" className={style.formSubmit} value="Log In" />
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Lobby;
