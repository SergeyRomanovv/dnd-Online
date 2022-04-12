import React from "react";
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

function NavBar() {
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = async (e) => {
    e.preventDefault();
    dispatch(submitLogout());
    navigate('/');
  };

  return (
    <>
      <Box className={style.mainBox} sx={{ flexGrow: 1 }}>
        <AppBar className={style.mainBox} position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link className={style.link} to='/'><Button color="inherit">TODO-LIST</Button></Link>
            </Typography>
            {user ? 
            <Link onClick={(e)=> logout(e)} className={style.link} to='/login'><Button color="inherit">LOGOUT</Button></Link>
            :
            <>
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
