import { FC, memo, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Tooltip } from '@mui/material';
import { MessageType } from 'src/api/chat-api';
import { AddMessageForm } from 'src/components/common/molecules/addMessageForm/AddMessageForm';
import Loader from 'src/components/loader/Loader';
import avatar from 'src/images/avatar.png';
import { chatActions } from 'src/redux/chatReducer';
import { RootState } from 'src/redux/redux-store';

import classes from './ChatPage.module.css';

export const ChatPage: FC = memo(() => {
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const status = useSelector((state: RootState) => state.chat.status);

  if (!isAuth) {
    return <Redirect to="/Login" />;
  }

  return (
    <>
      {status === 'pending' && <Loader isFetching={status === 'pending'} />}
      {status === 'ready' && (
        <>
          <Messages />
          <AddMessageForm />
        </>
      )}
    </>
  );
});

const Messages: FC = memo(() => {
  const messages = useSelector((state: RootState) => state.chat.messages);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView();
  }, [messages]);

  return (
    <div className={classes.messagesWrapper}>
      {messages.map((message) => (
        <Message
          key={message.id}
          userId={message.userId}
          message={message.message}
          photo={message.photo}
          userName={message.userName}
          id={message.id}
        />
      ))}
      <div ref={scrollRef}></div>
    </div>
  );
});

const Message: FC<MessageType> = memo(
  ({ message, userName, photo, userId, id }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const deleteMessage = () => {
      dispatch(chatActions.deleteMessageActionCreator(id as string));
    };
    return (
      <div className={classes.messageContainer}>
        <div className={classes.messageBlock}>
          <NavLink to={'/profile/' + userId}>
            <img
              src={photo ?? avatar}
              alt={userName}
              className={classes.avatar}
            />
          </NavLink>
          <div>
            <NavLink to={'/profile/' + userId}>
              <div className={classes.author}>{userName}</div>
            </NavLink>
            <div className={classes.message}>{message}</div>
          </div>
        </div>
        <div className={classes.iconWrapper}>
          <Tooltip
            title={t('chat.delete') as string}
            arrow
            placement="bottom-start"
          >
            <DeleteOutlineIcon
              onClick={deleteMessage}
              className={classes.icon}
            />
          </Tooltip>
        </div>
      </div>
    );
  }
);
