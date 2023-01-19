import { FC, memo, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { TextField } from '@mui/material';
import { MessageType } from 'src/api/chat-api';
import Loader from 'src/components/loader/Loader';
import {
  sendMessageThunkCreator,
  startMessagesThunkCreator,
  stopMessagesThunkCreator,
} from 'src/redux/chatReducer';
import { RootState } from 'src/redux/redux-store';

import classes from './ChatPage.module.css';

export const ChatPage: FC = memo(() => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const status = useSelector((state: RootState) => state.chatReducer.status);

  useEffect(() => {
    dispatch(startMessagesThunkCreator());
  }, []);

  useEffect(
    () => () => {
      dispatch(stopMessagesThunkCreator());
    },
    []
  );

  if (!isAuth) {
    return <Redirect to="/Login" />;
  }

  return (
    <div>
      {status === 'pending' && <Loader isFetching={status === 'pending'} />}
      {status === 'ready' && (
        <div className={classes.container}>
          <Messages />
          <AddMessageForm />
        </div>
      )}
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
        {messages.map((message) => (
          <Message
            key={message.id}
            userId={message.userId}
            message={message.message}
            photo={message.photo}
            userName={message.userName}
          />
        ))}
        <div ref={scrollRef}></div>
      </div>
    </>
  );
});

export const Message: FC<MessageType> = memo(
  ({ message, userName, photo, userId }) => (
    <div>
      <NavLink to={'/profile/' + userId}>
        <img src={photo} alt={userName} />
      </NavLink>
      <NavLink to={'/profile/' + userId}>
        <div>{userName}</div>
      </NavLink>
      <div>{message}</div>
    </div>
  )
);

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
