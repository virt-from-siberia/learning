import React from "react";
import {
  AppBar,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
  Badge,
} from "@material-ui/core";

import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item>
            <InputBase />
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color="primary">
                <ChatBubbleIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNewIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
