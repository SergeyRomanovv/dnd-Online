import React from 'react';
import style from "./style.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {submitSignin} from '../../redux/action/authAC';

export default function Login() {
  const inputs = useSelector(store => store.loginInputs);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(submitSignin(inputs, 'login'));
    navigate('/');
  };

  const changeHandler = (e) => {
    dispatch({ type: 'USER_TYPING_LOGIN', payload: { [e.target.name]: e.target.value }})
  };
  return (
    <>
      <form onSubmit={submitHandler} className={style.mainContainer}>
        <div className={style.mainBox}>
          <div className={style.titleBox}>
            <p className={style.title}>Log In</p> 
          </div>
          <div className={style.inputBox}>
            <p className={style.textBox}>Enter Email</p>
            <input className={style.input}  name="email" type="text" 
            onChange={changeHandler} />
          </div >
          <div className={style.inputBox}>
            <p className={style.textBox}>Enter Password</p>
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
