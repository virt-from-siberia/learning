import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";

import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
  let state = props.messagesPage;

  let dialogsElemets = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));

  console.log(state.messages);

  let messagesElement = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (evt) => {
    let body = evt.target.value;
    props.updateNewMessageBody(body);
  };

  if (props.isAuth === true) return <Redirect to={"/login"} />;

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElemets}</div>

      <div className={classes.messages}>
        <div>{messagesElement}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              plcaholder='Enter your message'
              onChange={onNewMessageChange}
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
