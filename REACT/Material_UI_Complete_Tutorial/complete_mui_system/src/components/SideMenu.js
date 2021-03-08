import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  slideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: 0,
    width: "320px",
    height: "100%",
    backgroundColor: "#253053",
  },
});

export const SlideMenu = () => {
  const classes = useStyles();

  return <div className={classes.slideMenu}>Slide Menu</div>;
};
