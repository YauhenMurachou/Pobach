import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';
import DialogsForm from './DialogsForm';
import { dialogsActions } from '../../redux/dialogsPageReducer';
import { RootState } from '../../redux/redux-store';

import classes from './Dialogs.module.css';

type valuesType = {
  newMessage: string;
};

type dialogType = {
  name: string;
  id: number;
};

type messageType = {
  message: string;
  id: number;
};

const Dialogs: React.FC = () => {
  const { dialogsData, messageData } = useSelector(
    (state: RootState) => state.dialogsPage
  );
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const addNewMessageForm = (values: valuesType) =>
    dispatch(dialogsActions.addMessageActionCreator(values.newMessage));

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
