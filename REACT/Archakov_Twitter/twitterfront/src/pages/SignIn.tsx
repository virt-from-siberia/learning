import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";

import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

export const useStylesSignIn = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    height: "100vh",
  },
  blueSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: " #71c9f8",
    flex: "0 0 50% ",
    overflow: "hidden",
    position: "relative",
  },
  blueSideListInfo: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    width: "380px",
    position: "relative",

    "& h6": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontWeight: "700",
      fontSize: "20px",
    },
  },
  blueSideListInfoItem: {
    marginBottom: "40px",
  },
  blueSideListInfoIcon: {
    fontSize: "32px",
    marginRight: "15px",
  },
  loginSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "0 0 50% ",
  },
  loginSideTwitterIcon: {
    fontSize: 50,
  },
  loginSideBigTwitterIcon: {
    position: "absolute",
    left: "65%",
    top: "45%",
    transform: "translate( -50%, -50%)",
    width: "200%",
    height: "200%",
  },
  loginSideWrapper: {
    width: "380px",
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: "32px",
    marginBottom: "45px",
    marginTop: "20px",
  },
}));

export const SignIn = () => {
  const classes = useStylesSignIn();

  const [visibleModal, setVisibleModal] = React.useState<"signIn" | "signUp">();

  const handleClickOpenSignIn = (): void => {
    setVisibleModal("signIn");
  };

  const handleClickOpenSignUp = (): void => {
    setVisibleModal("signUp");
  };

  const handleCloseModal = (): void => {
    setVisibleModal(undefined);
  };

  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon
          className={classes.loginSideBigTwitterIcon}
          color="primary"
        />
        <ul className={classes.blueSideListInfo}>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <SearchIcon className={classes.blueSideListInfoIcon} />
              Читайте то что вам интересно
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <GroupOutlinedIcon className={classes.blueSideListInfoIcon} />
              Читайте то что вам интересно
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <ChatBubbleOutlineOutlinedIcon
                className={classes.blueSideListInfoIcon}
              />
              Читайте то что вам интересно
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon
            className={classes.loginSideTwitterIcon}
            color="primary"
          />
          <Typography
            className={classes.loginSideTitle}
            gutterBottom
            variant="h4"
          >
            Узнайте что происходит прямо сейчас
          </Typography>
          <Typography>
            <b> Присоединяйтесь прямо сейчас </b>
          </Typography>
          <br />
          <Button
            style={{ marginBottom: "20px" }}
            variant="contained"
            color="primary"
            fullWidth
          >
            Зарегистрироваться
          </Button>
          <Button variant="outlined" color="primary" fullWidth>
            Войти
          </Button>
        </div>
      </section>
    </div>
  );
};
