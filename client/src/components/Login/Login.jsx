import React from 'react';
import style from "./style.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const inputs = useSelector(store => store.loginInputs);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/auth/signin', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(inputs)
    });
    const fromBack = await response.json();

    dispatch({type: 'SET_USER', payload: fromBack});
    localStorage.user_id = fromBack.userId;
    navigate('/');
    dispatch({type: 'CLEAR_INPUTS', payload: {}});
  };
  const changeHandler = (e) => {
    dispatch({ type: 'USER_TYPING_LOGIN', payload: { [e.target.name]: e.target.value }})
  };
  return (
    <>
      <form onSubmit={submitHandler} className={style.mainContainer}>
        <div className={style.mainBox}>
          <div className={style.titleBox}>
            <p className={style.title}>Вход</p> 
          </div>
          <div className={style.inputBox}>
            <p className={style.textBox}>Введите email</p>
            <input className={style.input}  name="email" type="text" 
            onChange={changeHandler} />
          </div >
          <div className={style.inputBox}>
            <p className={style.textBox}>Введите пароль</p>
            <input className={style.input} name="password" type="password" 
            onChange={changeHandler} />
          </div>
          <div className={style.buttonBox}>
            <button type="submit" className={style.button}>Подтвердить</button>
          </div>
        </div>
      </form>
    </>
  )
}
