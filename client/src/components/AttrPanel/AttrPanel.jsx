import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './style.module.css';
import { useDispatch } from 'react-redux';

export default function Proverka({getImgSrcHundler}) {

  const [attrCategories, setAttrCategories] = useState([]);
  const [attrImages, setAttrImages ] = useState([]);
  const [attrImgToggle, setAttrImgToggle] = useState(style.attrPanelImages);
  //const [attrMasterTogle, setAttrMasterTogle] = useState({view: style.masterPanel, icon: 'fa-solid fa-chevron-down'});

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3001/attributies')
      .then((res) => {
        // console.log('attributes', res.data)
        setAttrCategories(res.data);
      })
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3001/attributies/attr`)
      .then((res) => {
        setAttrImages(res.data);
      })
  }, []);

  const getImagesHundler = (id) => {
    setAttrImgToggle(false)
    console.log(id);
    axios.post(`http://localhost:3001/attributies/attr/${id}`)
      .then((res) => {
        // console.log(res.data);
        setAttrImgToggle(style.attrPanelImages)
        setAttrImages(res.data);
      })
  }

  // const getSrcHundler = (e) => {
  //   const imgSrc = e.target.alt;
  //   // console.log('rrrrrrrrrrrrrrrrrrrrr', imgSrc);
  //   dispatch({ type: 'GET_SRC', payload: imgSrc });
  // }

  // function attrTogleHundler() {
  //   if (attrMasterTogle.view === style.masterPanel) {
  //     setAttrMasterTogle({view: style.masterPanel1, icon: 'fa-solid fa-chevron-down'});
  //   } else {
  //     setAttrMasterTogle({view: style.masterPanel, icon: 'fa-solid fa-chevron-up'});
  //   }
  // }

  return (
    <div className={style.mainBox}>
      {/* <div>
      <button onClick={attrTogleHundler} className={style.attrToggleBtn}><span className={style.attrIconText}>Attributes Panel</span> <i class={attrMasterTogle.icon}></i></button>
    </div> */}
    <div className={style.attrPanel}>
      <div className={style.attrMainPanel}>
        <div className={style.attrButtonsPanel}>
          {attrCategories.map(cat => <button id={cat.id} key={cat.id} onClick={() => getImagesHundler(cat.id)} >{cat.title}</button> )}
        </div>
        <div className={style.attrImagesPanel}>
          {attrImgToggle ? attrImages.map(pic => <img className={attrImgToggle} src={pic.url} alt={pic.url} tabindex="0" onClick={getImgSrcHundler} /> ) : <div className={style.attrEmptyDiv}></div> }
        </div>
      </div>
    </div>
    </div>
  )
}