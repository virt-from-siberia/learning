import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import classes from "./Dialogs.module.css";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/state";

const Dialogs = (props) => {
  let state = props.store.getState().messagesPage;

  console.log(state);

  let dialogsElemets = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));

  console.log(state.messages);

  let messagesElement = state.messages.map(
    (m) => console.log(m) || <Message message={m.message} key={m.id} />
  );

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (evt) => {
    let body = evt.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElemets}</div>

      <div className={classes.messages}>
        <div>{messagesElement}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              plcaholder="Enter your message"
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
