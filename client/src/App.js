import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Table from "./components/Table/Table";
import {Routes, Route} from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from './redux/action/authAC';
import GamePage from "./components/GamePage/GamePage";


function App() {

  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  console.log(user);

  useEffect(()=> {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
      console.log('useEfect');
    }
  },[]);

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<GamePage />} />
        <Route path="/builder" element={<Table/>} />
        <Route path="/register" element={<Registration/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>

    </>
  );
}

export default App;
