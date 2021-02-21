import {
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";

import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MessageIcon from "@material-ui/icons/Message";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ListIcon from "@material-ui/icons/List";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

const useHomeStyles = makeStyles(() => ({
  sideMenuList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  slideMenuItem: {
    display: "flex",
    alignItems: "center",
  },
  slideMenuItemLabel: {
    fontWeight: 700,
    fontSize: "20px",
    marginRight: "15px",
  },
  slideMenuItemIcon: {
    fontSize: "32px ",
  },
}));

export const Home = () => {
  const classes = useHomeStyles();

  return (
    <section>
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <ul className={classes.sideMenuList}>
            <li className={classes.slideMenuItem}>
              <IconButton color="primary" aria-label="delete">
                <TwitterIcon className={classes.slideMenuItemIcon} />
              </IconButton>
            </li>
            <li className={classes.slideMenuItem}>
              <IconButton color="primary" aria-label="delete">
                <SearchIcon className={classes.slideMenuItemIcon} />
              </IconButton>
              <Typography className={classes.slideMenuItemLabel} variant="h6">
                Поиск
              </Typography>
            </li>
            <li className={classes.slideMenuItem}>
              <IconButton color="primary" aria-label="delete">
                <NotificationsIcon className={classes.slideMenuItemIcon} />
              </IconButton>
              <Typography className={classes.slideMenuItemLabel} variant="h6">
                Уведомления
              </Typography>
            </li>
            <li className={classes.slideMenuItem}>
              <IconButton color="primary" aria-label="delete">
                <MessageIcon className={classes.slideMenuItemIcon} />
              </IconButton>
              <Typography className={classes.slideMenuItemLabel} variant="h6">
                Сообщение
              </Typography>
            </li>
            <li className={classes.slideMenuItem}>
              <IconButton color="primary" aria-label="delete">
                <BookmarkIcon className={classes.slideMenuItemIcon} />
              </IconButton>
              <Typography className={classes.slideMenuItemLabel} variant="h6">
                Закладки
              </Typography>
            </li>
            <li className={classes.slideMenuItem}>
              <IconButton color="primary" aria-label="delete">
                <ListIcon className={classes.slideMenuItemIcon} />
              </IconButton>
              <Typography className={classes.slideMenuItemLabel} variant="h6">
                Список
              </Typography>
            </li>
            <li className={classes.slideMenuItem}>
              <IconButton color="primary" aria-label="delete">
                <PermIdentityIcon className={classes.slideMenuItemIcon} />
              </IconButton>
              <Typography className={classes.slideMenuItemLabel} variant="h6">
                Профиль
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={7}>
          <Paper>xs</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>xs</Paper>
        </Grid>
      </Grid>
    </section>
  );
};
