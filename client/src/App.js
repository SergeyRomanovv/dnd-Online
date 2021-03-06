import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Table from "./components/Table/Table";
import Lobby from "./components/Lobby/Lobby";
import { Routes, Route } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { checkAuth } from './redux/action/authAC';
import GamePage from "./components/GamePage/GamePage";
import Room from "./components/Room/Room";
import Proverka from './components/Proverka/Proverka';
import GamePlay from "./components/GamePlay/GamePlay";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/builder" element={<Table/>} />
        <Route path="/register" element={<Registration/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/room/:id" element={<Room/>} />
        <Route path="/proverka" element={<Proverka />} />
        <Route path="/gameplay" element={<GamePlay />} />
      </Routes>
    </>
  );
}

export default App;
