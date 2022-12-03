import { FC, useEffect, useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  sendMessageThunkCreator,
  startMessagesThunkCreator,
  stopMessagesThunkCreator,
} from '../../redux/chatReducer';
import { RootState } from '../../redux/redux-store';
import { MessageType } from '../../api/chat-api';

export const ChatPage: FC = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startMessagesThunkCreator());
  }, []);

  useEffect(() => {
    return () => {
      dispatch(stopMessagesThunkCreator());
    };
  }, []);

  return (
    <div>
      <AddMessageForm />
      <Messages />
    </div>
  );
});

export const Messages: FC = () => {
  const messages = useSelector(
    (state: RootState) => state.chatReducer.messages
  ).reverse();

  return (
    <div>
      {messages.map((item, index) => (
        <Message
          key={item.userName + index.toString()}
          message={item.message}
          photo={item.photo}
          userName={item.userName}
        />
      ))}
    </div>
  );
};

export const Message: FC<MessageType> = ({ message, userName, photo }) => {
  return (
    <div>
      <img src={photo} alt={userName} />
      <div>{userName}</div>
      <div>{message}</div>
    </div>
  );
};

export const AddMessageForm: FC = () => {
  const [message, setMessage] = useState('');
  // const [status, setStatus] = useState<'pending' | 'ready'>('pending');

  const dispatch = useDispatch();

  // useEffect(() => {
  //   const openHandler = () => setStatus('ready');
  //   wsChannel?.addEventListener('open', openHandler);
  //   return () => {
  //     wsChannel?.removeEventListener('open', openHandler);
  //     wsChannel?.close();
  //   };
  // }, [wsChannel]);

  const sendMessage = () => {
    if (!message) {
      return;
    }
    dispatch(sendMessageThunkCreator(message));
    setMessage('');
  };

  return (
    <div>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
      ></textarea>
      <button type="submit" onClick={sendMessage}>
        send
      </button>
    </div>
  );
};
