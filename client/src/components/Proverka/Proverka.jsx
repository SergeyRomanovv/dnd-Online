// import React, { useState } from 'react';
// import style from './style.module.css'; 

// export default function Proverka() {

//   const [array, setArray] = useState([{ id: 1, title: 'ttt1', type: 'type1',  url: 'url1', disp: 'none' }, { id: 2, title: 'ttt2', type: 'type2', url: 'url2', disp: 'none' }, { id: 3, title: 'ttt3', type: 'type3', url: 'url3', disp: 'none' }]);
//   // const [obj, setObj] = useState({ id: 1, title: 'ttt1', type: 'type1', url: 'url1', disp: 'none' })

//   function togleHundler(id) {
//     // obj.disp = 'block';
//     // setObj({...obj});


//     array.map(el => {
//       if (el.id === id) {
//         el.disp = 'block';
//         console.log(id);
//       } else {
//         el.disp = 'none';
//       }
//       return el;
//     });
//     setArray([...array]);
//   }

//   console.log(array);

//   return (
//     <div className={style.mainBox}>
//       {array.map(obj => {
//         return (
//           <div>
//         <button onClick={() => togleHundler(obj.id)}>{obj.title}</button>
//         <div id={obj.id} style={{ display: obj.disp }} >
//           <p>{obj.url}</p>
//         </div>
//       </div >
//         )
//       })}
//     </div >
//   )
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './style.module.css';
import { useDispatch } from 'react-redux';

export default function Proverka({getImgSrcHundler}) {

  const [attrCategories, setAttrCategories] = useState([]);
  const [attrImages, setAttrImages ] = useState([]);
  const [attrImgToggle, setAttrImgToggle] = useState(style.attrPanelImages);
  // const [attrMasterTogle, setAttrMasterTogle] = useState({view: style.masterPanel1, icon: 'fa-solid fa-chevron-down'});

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3001/builder/categories')
      .then((res) => {
        // console.log(res.data)
        setAttrCategories(res.data);
      })
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3001/builder/images`)
      .then((res) => {
        setAttrImages(res.data);
      })
  }, []);

  const getImagesHundler = (id) => {
    setAttrImgToggle(false)
    console.log(id);
    axios.post(`http://localhost:3001/builder/images/${id}`)
      .then((res) => {
        // console.log(res.data);
        setAttrImgToggle(style.attrPanelImages)
        setAttrImages(res.data);
      })
  }

  const getSrcHundler = (e) => {
    const imgSrc = e.target.alt;
    // console.log('rrrrrrrrrrrrrrrrrrrrr', imgSrc);
    dispatch({ type: 'GET_SRC', payload: imgSrc });
  }

  // function attrTogleHundler() {
  //   if (attrMasterTogle.view === style.masterPanel) {
  //     setAttrMasterTogle({view: style.masterPanel1, icon: 'fa-solid fa-chevron-down'});
  //   } else {
  //     setAttrMasterTogle({view: style.masterPanel, icon: 'fa-solid fa-chevron-up'});
  //   }
  // }

  return (
    <div className={style.proverkaPanel}>
      {/* <div>
      <button onClick={attrTogleHundler} className={style.attrToggleBtn}><span className={style.attrIconText}>Builder Panel</span> <i class={attrMasterTogle.icon}></i></button>
    </div> */}
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
