import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css';
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BuilderPanel() {
  const gameMap = useSelector((store) => store.gameMap);
  const boardtitle = useSelector((store) => store.boardtitle);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //proverks
  const [categories, setCategories] = useState([]);
  const [images, setImages ] = useState([]);
  const [togle, setTogle] = useState({view: style.footerPanel1, icon: 'fa-solid fa-chevron-down'});
  const [imgToggle, setImgToggle] = useState(style.panelImages);
  // proverks useffects end
  useEffect(() => {
    axios.get('http://localhost:3001/builder/categories')
      .then((res) => {
        setCategories(res.data);
      });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3001/builder/images`)
      .then((res) => {
        setImages(res.data);
      });
  }, []);
  // proverks useeffect end

  const getSrcHundler = (e) => {
    const imgSrc = e.target.alt;
    dispatch({ type: 'GET_SRC', payload: imgSrc });
  };

  const saveHandler = async () => {
    if (boardtitle.title) {
      const userName = localStorage.getItem('userName');
      const response = await axios.post('http://localhost:3001/builder/save', { board: gameMap, boardTitle: boardtitle, userName: userName});
      dispatch({ type: 'DEL_BOARD_TITLE', payload: {} });
      navigate('/');
    } else {
      alert('Введите название поля для сохранения!');
    }
  };

  const titleHandler = (ev) => {
    dispatch({ type: 'SET_BOARD_TITLE', payload: { [ev.target.name]: ev.target.value } });
  };

  
 // proverks 
  const getImagesHundler = (id) => {
    setImgToggle(false);
    axios.post(`http://localhost:3001/builder/images/${id}`)
      .then((res) => {
        setImgToggle(style.panelImages);
        setImages(res.data);
      });
  };

  function togleHundler() {
    if (togle.view === style.footerPanel) {
      setTogle({view: style.footerPanel1, icon: 'fa-solid fa-chevron-down'});
    } else {
      setTogle({view: style.footerPanel, icon: 'fa-solid fa-chevron-up'});
    }
  }

  // proverks end


  return (
    <div className={togle.view}>
    <div>
      <button onClick={togleHundler} className={style.toggleBtn}><span className={style.iconText}>Builder Panel</span> <i class={togle.icon}></i></button>
    </div>
    <div className={style.panel}>
      <div className={style.mainPanel}>
        <div className={style.buttonsPanel}>
          {categories.map(cat => <button id={cat.id} key={cat.id} onClick={() => getImagesHundler(cat.id)} >{cat.title}</button> )}
        </div>
        <div className={style.imagesPanel}>
          {imgToggle ? images.map(pic => <img key={pic.id} className={imgToggle} src={pic.url} alt={pic.url} tabIndex="0" onClick={getSrcHundler} /> ) : <div className={style.emptyDiv}></div> }
        </div>
      </div>
      <div className={style.btnBox}>

        <input type="text" name='title' value={boardtitle.title || ''} onChange={titleHandler} />
        <button className={style.btn} onClick={saveHandler}>SAVE</button>

      </div>
    </div>
    </div>
  )
}
