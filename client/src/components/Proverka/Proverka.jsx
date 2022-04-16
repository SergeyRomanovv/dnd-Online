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

export default function Proverka() {

  const [categories, setCategories] = useState([]);
  const [images, setImages ] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/builder/categories')
      .then((res) => {
        // console.log(res.data)
        setCategories(res.data);
      })
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3001/builder/images`)
      .then((res) => {
        setImages(res.data);
      })
  }, []);

  const getImagesHundler = (id) => {
    console.log(id);
    axios.post(`http://localhost:3001/builder/images/${id}`)
      .then((res) => {
        console.log(res.data);
        setImages(res.data);
      })
  }

  
console.log('eeeeeeeeeeeeee', images);

  return (
    <div>
      <div className={style.mainPanel}>
        <div className={style.buttonsPanel}>
          {categories.map(cat => <button id={cat.id} key={cat.id} onClick={() => getImagesHundler(cat.id)} >{cat.title}</button> )}
        </div>
        <div className={style.imagesPanel}>
          {images.map(pic => <img src={pic.url} alt={pic.url} /> )}
        </div>
        <p>cdsffsdfsdf</p>
      </div>
    </div>
  )
}
