import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

export const useStylesSignIn = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    height: "100%",
  },
  blueBlock: {
    backgroundColor: " #1da1f2",
  },
  loginBlock: {},
}));

export const SignIn = () => {
  const classes = useStylesSignIn();

  return (
    <div className={classes.wrapper}>
      <div className={classes.blueBlock}>
        <ul>
          <li>
            <Typography>Читайте то что вам интересно</Typography>
          </li>
          <li>
            <Typography></Typography>
          </li>
          <li>
            <Typography></Typography>
          </li>
        </ul>
      </div>

      <div className={classes.loginBlock}></div>
    </div>
  );
};
