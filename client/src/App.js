import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Table from "./components/Table/Table";
import {Routes, Route} from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { checkAuth } from './redux/action/authAC';
import VideoChat from "./components/Videochat/VideoChat";
import Room from "./components/Room/Room";

function App() {

  const dispatch = useDispatch();

  useEffect(()=> {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  },[]);

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/builder" element={<Table/>} />
        <Route path="/register" element={<Registration/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<VideoChat/>} />
        <Route path="/room/:id" element={<Room/>} />
      </Routes>

    </>
  );
}

export default App;
