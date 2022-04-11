import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import style from "./style.module.css";

function NavBar() {

  return (
    <>
      <Box className={style.mainBox} sx={{ flexGrow: 1 }}>
        <AppBar className={style.mainBox} position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link className={style.link} to='/'><Button color="inherit">TODO-LIST</Button></Link>
            </Typography>
            <Link className={style.link} to='/register'> <Button color="inherit">REGISTER</Button></Link>
            <Link className={style.link} to='/login'><Button color="inherit">LOGIN</Button></Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default NavBar;
