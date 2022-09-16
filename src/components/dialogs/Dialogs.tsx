import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';

import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';
import DialogsForm from './DialogsForm';
import {
  addMessageActionCreator,
  addMessageActionType,
} from '../../redux/dialogsPageReducer';

import classes from './Dialogs.module.css';

export type valuesType = {
  newMessage: string;
};

export type dialogType = {
  name: string;
  id: number;
};

export type messageType = {
  message: string;
  id: number;
};

const Dialogs: React.FC = () => {
  const { dialogsData, messageData } = useSelector(
    (state: RootStateOrAny) => state.dialogsPage
  );
  const { isAuth } = useSelector((state: RootStateOrAny) => state.auth);
  const dispatch = useDispatch();

  const addNewMessageForm = (values: valuesType): addMessageActionType =>
    dispatch(addMessageActionCreator(values.newMessage));

  const dialogsItemsCopy = dialogsData.map((dialog: dialogType) => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
  ));

  const messagesItemsCopy = messageData.map((message: messageType) => (
    <Message message={message.message} id={message.id} key={message.id} />
  ));

  if (!isAuth) {
    return <Redirect to="/Login" />;
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsItemsCopy}</div>
      <div className={classes.messages}>
        <div>{messagesItemsCopy}</div>
        <DialogsForm onSubmit={addNewMessageForm} />
      </div>
    </div>
  );
};

export default Dialogs;
