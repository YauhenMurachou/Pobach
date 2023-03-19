import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import SendIcon from '@mui/icons-material/Send';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import {
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from '@mui/material';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { sendMessageThunkCreator } from 'src/redux/chatReducer';
import { RootState } from 'src/redux/redux-store';

import classes from './AddMessageForm.module.css';

export const AddMessageForm: FC = () => {
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
