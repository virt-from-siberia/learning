import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import classes from "./Dialogs.module.css";

const Dialogs = ({ state: { dialogs, messages } }) => {
  let dialogsElemets = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));

  let messagesElement = messages.map((m) => (
    <Message message={m.messgae} key={m.id} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElemets}</div>

      <div className={classes.messages}>{messagesElement}</div>
    </div>
  );
};

export default Dialogs;
