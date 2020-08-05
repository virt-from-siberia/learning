import React, { FC } from "react";
import { Redirect } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { InitialStateType } from "../../redux/dialogs-reducer";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

type PropsType = {
  dialogsPage: InitialStateType;
  sendMessage: (messageText: string) => void;
};
export type NewMessageFormType = {
  newMessageBody: string;
};

const Dialogs: React.FC<PropsType> = props => {
  const state = props.dialogsPage;

  const dialogsElements = state.dialogs.map(d => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  const messagesElements = state.messages.map(m => (
    <Message message={m.message} key={m.id} />
  ));

  const addNewMessage = (values: NewMessageFormType) => {
    props.sendMessage(values.newMessageBody);
  };

  // if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
      </div>
      <AddMessageForm onSubmit={addNewMessage} />
    </div>
  );
};

export default Dialogs;
