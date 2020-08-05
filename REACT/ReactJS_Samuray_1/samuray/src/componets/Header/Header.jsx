import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  return (
    <header className={classes.header}>
      <img
        src='https://cdn.freebiesupply.com/logos/thumbs/2x/react-1-logo.png'
        alt='react must have'
      />
      <div className={classes.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
