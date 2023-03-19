import { FC, memo, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SendIcon from '@mui/icons-material/Send';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import {
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from '@mui/material';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { MessageType } from 'src/api/chat-api';
import Loader from 'src/components/loader/Loader';
import avatar from 'src/images/avatar.png';
import { sendMessageThunkCreator } from 'src/redux/chatReducer';
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
        />
      ))}
      <div ref={scrollRef}></div>
    </div>
  );
});

const Message: FC<MessageType> = memo(
  ({ message, userName, photo, userId }) => (
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
        <DeleteOutlineIcon
          onClick={() => console.log('clicked')}
          className={classes.icon}
        />
      </div>
    </div>
  )
);

const AddMessageForm: FC = () => {
  const [message, setMessage] = useState('');
  const status = useSelector((state: RootState) => state.chat.status);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const sendMessage = () => {
    if (!message) {
      return;
    }
    dispatch(sendMessageThunkCreator(message));
    setMessage('');
  };

  const [showEmoji, setShowEmoji] = useState(false);

  const handleShowEmoji = () => {
    setShowEmoji((prevState) => !prevState);
  };

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setMessage(message + emojiData.emoji);
  };

  return (
    <div className={classes.addMessageForm}>
      <OutlinedInput
        placeholder={t('chat.enter') as string}
        multiline
        maxRows={4}
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
        fullWidth
        onKeyDown={(e) => {
          if (e.ctrlKey && e.key === 'Enter') {
            setMessage(`${message}\r\n`);
          } else if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
          }
        }}
        autoFocus
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleShowEmoji} edge="end">
              <TagFacesIcon />
            </IconButton>
          </InputAdornment>
        }
      />
      {showEmoji && (
        <div className={classes.emojiContainer}>
          <EmojiPicker
            onEmojiClick={handleEmojiClick}
            autoFocusSearch={false}
          />
        </div>
      )}
      <Button
        onClick={sendMessage}
        disabled={status !== 'ready' || !message.trim().length}
        variant="contained"
        endIcon={<SendIcon />}
      >
        {t('chat.send')}
      </Button>
    </div>
  );
};
