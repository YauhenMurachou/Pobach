import { FC, useEffect, useState, memo, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  sendMessageThunkCreator,
  startMessagesThunkCreator,
  stopMessagesThunkCreator,
} from '../../redux/chatReducer';
import { RootState } from '../../redux/redux-store';
import { MessageType } from '../../api/chat-api';
import { TextField } from '@mui/material';

import classes from './ChatPage.module.css';

export const ChatPage: FC = memo(() => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(startMessagesThunkCreator());
  }, []);

  useEffect(() => {
    return () => {
      dispatch(stopMessagesThunkCreator());
    };
  }, []);

  if (!isAuth) {
    return <Redirect to="/Login" />;
  }

  return (
    <div className={classes.container}>
      <Messages />
      <AddMessageForm />
    </div>
  );
});

export const Messages: FC = memo(() => {
  const messages = useSelector(
    (state: RootState) => state.chatReducer.messages
  );

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView();
  }, [messages]);

  return (
    <>
      <div className={classes.messagesWrapper}>
        {messages.map((item) => (
          <Message
            key={item.id}
            message={item.message}
            photo={item.photo}
            userName={item.userName}
          />
        ))}
        <div ref={scrollRef}></div>
      </div>
    </>
  );
});

export const Message: FC<MessageType> = memo(({ message, userName, photo }) => {
  return (
    <div>
      <img src={photo} alt={userName} />
      <div>{userName}</div>
      <div>{message}</div>
    </div>
  );
});

export const AddMessageForm: FC = () => {
  const [message, setMessage] = useState('');
  const status = useSelector((state: RootState) => state.chatReducer.status);
  const dispatch = useDispatch();

  const sendMessage = () => {
    if (!message) {
      return;
    }
    dispatch(sendMessageThunkCreator(message));
    setMessage('');
  };

  return (
    <div className={classes.addMessageForm}>
      <TextField
        placeholder="Введите сообщение..."
        multiline
        maxRows={4}
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
        fullWidth
        margin="normal"
        onKeyDown={(e) => {
          if (e.ctrlKey && e.key === 'Enter') {
            setMessage(`${message}\r\n`);
          } else if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
          }
        }}
      />
      <button type="submit" onClick={sendMessage} disabled={status !== 'ready'}>
        send
      </button>
    </div>
  );
};
