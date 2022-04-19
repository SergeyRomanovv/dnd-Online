import React from 'react';
import style from "./style.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {submitSignin} from '../../redux/action/authAC';

export default function Registration() {
  const inputs = useSelector(store => store.registerInputs);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(submitSignin(inputs, 'registration'));
    navigate('/');
  };

  const changeHandler = (e) => {
    dispatch({ type: 'USER_TYPING', payload: { [e.target.name]: e.target.value } });
  };

  return (
    <>
      <form onSubmit={submitHandler} className={style.mainContainer}>
        <div className={style.mainBox}>
          <div className={style.titleBox}>
            <p className={style.title}>Registration</p>
          </div>
          <div className={style.inputBox}>
            <p className={style.textBox}>Enter Username</p>
            <input className={style.input} name="userName" type="text"
              onChange={changeHandler} />
          </div >
          <div className={style.inputBox}>
            <p className={style.textBox}>Enter Email</p>
            <input className={style.input} name="email" type="text"
              onChange={changeHandler} />
          </div>
          <div className={style.inputBox}>
            <p className={style.textBox}>Enter Password</p>
            <input className={style.input} name="password" type="password"
              onChange={changeHandler} />
          </div>
          <div className={style.buttonBox}>
            <button type="submit" className={style.button}>Confirm</button>
          </div>
        </div>
      </form>
    </>
  )
}
