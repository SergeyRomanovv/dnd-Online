import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './style.module.css';

export default function Proverka({getImgSrcHundler}) {

  const [attrCategories, setAttrCategories] = useState([]);
  const [attrImages, setAttrImages ] = useState([]);
  const [attrImgToggle, setAttrImgToggle] = useState(style.attrPanelImages);


  useEffect(() => {
    axios.get('http://localhost:3001/builder/categories')
      .then((res) => {
        setAttrCategories(res.data);
      });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3001/builder/images`)
      .then((res) => {
        setAttrImages(res.data);
      });
  }, []);

  const getImagesHundler = (id) => {
    setAttrImgToggle(false);
    console.log(id);
    axios.post(`http://localhost:3001/builder/images/${id}`)
      .then((res) => {
        setAttrImgToggle(style.attrPanelImages);
        setAttrImages(res.data);
      });
  };

  return (
    <div className={style.proverkaPanel}>
    <div className={style.attrPanel}>
      <div className={style.attrMainPanel}>
        <div className={style.attrButtonsPanel}>
          {attrCategories.map(cat => <button id={cat.id} key={cat.id} onClick={() => getImagesHundler(cat.id)} >{cat.title}</button> )}
        </div>
        <div className={style.attrImagesPanel}>
          {attrImgToggle ? attrImages.map(pic => <img className={attrImgToggle} src={pic.url} alt={pic.url} tabindex="0" /> ) : <div className={style.attrEmptyDiv}></div> }
        </div>
      </div>
    </div>
    </div>
  )
}
