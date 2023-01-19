import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import DialogItem from 'src/components/dialogs/dialogItem/DialogItem';
import DialogsForm from 'src/components/dialogs/DialogsForm';
import Message from 'src/components/dialogs/message/Message';
import { dialogsActions } from 'src/redux/dialogsPageReducer';
import { RootState } from 'src/redux/redux-store';

import classes from './Dialogs.module.css';

type ValuesType = {
  newMessage: string;
};

type DialogType = {
  name: string;
  id: number;
};

type MessageType = {
  message: string;
  id: number;
};

const Dialogs: React.FC = () => {
  const { dialogsData, messageData } = useSelector(
    (state: RootState) => state.dialogsPage
  );
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const addNewMessageForm = (values: ValuesType) =>
    dispatch(dialogsActions.addMessageActionCreator(values.newMessage));

  const dialogsItemsCopy = dialogsData.map((dialog: DialogType) => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
  ));

  const messagesItemsCopy = messageData.map((message: MessageType) => (
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
