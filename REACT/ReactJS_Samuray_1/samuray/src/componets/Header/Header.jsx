import React from "react";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img
        src='https://cdn.freebiesupply.com/logos/thumbs/2x/react-1-logo.png'
        alt='react must have'
      />
    </header>
  );
};

export default Header;
