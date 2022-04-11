import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import {Routes, Route} from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/register" element={<Registration/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;
