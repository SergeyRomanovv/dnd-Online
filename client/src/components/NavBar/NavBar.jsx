import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import style from "./style.module.css";
import {submitLogout} from "../../redux/action/authAC";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function NavBar() {

  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [gmaster, setGmaster] = useState(localStorage.getItem("isGM"));

  useEffect(() => {
    axios.post('http://localhost:3001/userstatus', { user })
      .then((res) => {
        console.log('55555555',res.data)
        setGmaster(res.data.isGameMaster)
        localStorage.setItem('isGM', res.data.isGameMaster)
      })
  }, [user]);
  
  const logout = async (e) => {
    e.preventDefault();
    dispatch(submitLogout());
    navigate('/');
  };

  const statusHundler = () => {
    axios.patch('http://localhost:3001/userstatus', { user })
      .then((res) => {
        console.log('fddsgdfhfgjhuujytyrerewrtewrt', res.data)
        setGmaster(res.data.isGameMaster)
        localStorage.setItem('isGM', res.data.isGameMaster)
      })
  }

  return (
    <>
      <Box className={style.mainBox} sx={{ flexGrow: 1 }}>
        <AppBar className={style.mainBox} position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link className={style.link} to='/'><Button color="inherit">DUNGEON ONLINE <img src="монстр.png" alt="..." /></Button></Link>
            </Typography>
            {user ? 
            <>
            <Link className={style.link} to='/builder'><Button color="inherit">BUILDER</Button></Link>
            { gmaster ?
              <Link onClick={() => statusHundler()} className={style.link} to='/'><Button color="inherit">BECOME PLAYER </Button></Link> :
              <Link onClick={() => statusHundler()} className={style.link} to='/'><Button color="inherit">BECOME GAMEMASTER</Button></Link>
            }
            <Link className={style.link} to='/GamePlay'><Button color="inherit">GAMEPLAY</Button></Link>
            <Link onClick={(e)=> logout(e)} className={style.link} to='/login'><Button color="inherit">LOGOUT</Button></Link>
            </>
            :
            <>
            <Link className={style.link} to='/builder'><Button color="inherit">BUILDER</Button></Link>
            <Link className={style.link} to='/GamePlay'><Button color="inherit">GAMEPLAY</Button></Link>
            <Link className={style.link} to='/register'> <Button color="inherit">REGISTER</Button></Link>
            <Link className={style.link} to='/login'><Button color="inherit">LOGIN</Button></Link>
            </>
            }
            
            
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default NavBar;
