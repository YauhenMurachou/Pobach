import { FC } from 'react';
import { useDispatch } from 'react-redux';
import DialogsForm from 'src/components/dialogs/DialogsForm';
import { MessagesList, sendMessageAction } from 'src/redux/dialogsReducer';

import classes from './DialogItem.module.css';

type ValuesType = {
  newMessage: string;
};

type Props = {
  messages: MessagesList;
  dialogId: number;
};

const DialogItem: FC<Props> = ({ messages, dialogId }) => {
  const dispatch = useDispatch();

  const addNewMessageForm = (values: ValuesType) => {
    dispatch(sendMessageAction({ id: dialogId, body: values.newMessage }));
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
