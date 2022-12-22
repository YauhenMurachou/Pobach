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
    <div>
      <Messages />
      <AddMessageForm />
    </div>
  );
});

export const Messages: FC = memo(() => {
  const messages = useSelector(
    (state: RootState) => state.chatReducer.messages
  );
  const [autoScroll, setAutoScroll] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const element = e.currentTarget;
    if (
      Math.abs(element.scrollHeight - element.scrollTop) -
        element.clientHeight <
      250
    ) {
      !autoScroll && setAutoScroll(true);
    } else {
      autoScroll && setAutoScroll(false);
    }
  };

  useEffect(() => {
    autoScroll && scrollRef.current?.scrollIntoView();
  }, [messages]);

  return (
    <>
      <div onScroll={scrollHandler}>
        {messages.map((item) => (
          <Message
            key={item.id}
            message={item.message}
            photo={item.photo}
            userName={item.userName}
          />
        ))}
      </div>
      <div ref={scrollRef}></div>
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
    <div>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
      ></textarea>
      <button type="submit" onClick={sendMessage} disabled={status !== 'ready'}>
        send
      </button>
    </div>
  );
};
