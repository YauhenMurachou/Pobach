import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DialogsForm from 'src/components/dialogs/DialogsForm';
import { sendMessageAction } from 'src/redux/dialogsReducer';
import { RootState } from 'src/redux/redux-store';

import classes from './DialogItem.module.css';

type ValuesType = {
  newMessage: string;
};

const DialogItem: FC = () => {
  const dispatch = useDispatch();

  const { messages, openDialogId } = useSelector((state: RootState) => ({
    messages: state.dialogs.messagesList,
    openDialogId: state.dialogs.openDialogId,
  }));

  const addNewMessageForm = (values: ValuesType) => {
    dispatch(
      sendMessageAction({ id: openDialogId as number, body: values.newMessage })
    );
    values.newMessage = '';
  };

  return (
    <>
      <div>
        {messages?.items.map((message) => (
          <div key={message.id}>{message.body}</div>
        ))}
      </div>
      <div className={classes.messages}>
        <DialogsForm onSubmit={addNewMessageForm} />
      </div>
    </>
  );
};

export default DialogItem;
