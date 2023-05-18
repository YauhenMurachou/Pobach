import { FC, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import SendIcon from '@mui/icons-material/Send';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import {
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from '@mui/material';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { useClickOutside } from 'src/hooks/useClickOutside';
import { ChatActionsType } from 'src/redux/chatReducer';
import { CommonThunkType } from 'src/redux/redux-store';
import { ChatMessage, ChatStatus } from 'src/types';

import classes from './SendMessageForm.module.css';

type Props = {
  status?: ChatStatus;
  sendMessageChat?: (
    message: ChatMessage['message']
  ) => CommonThunkType<ChatActionsType>;
  sendMessageDialog?: (newMessage: string) => void;
};

export const SendMessageForm: FC<Props> = ({
  status,
  sendMessageChat,
  sendMessageDialog,
}) => {
  const [message, setMessage] = useState('');
  const [showEmoji, setShowEmoji] = useState(false);
  const emojiRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleMessage = () => {
    if (!message) {
      return;
    }
    if (sendMessageChat) {
      dispatch(sendMessageChat(message));
    }
    if (sendMessageDialog) {
      sendMessageDialog(message);
    }
    setMessage('');
  };

  const handleShowEmoji = () => {
    setShowEmoji((prevState) => !prevState);
  };
  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setMessage(message + emojiData.emoji);
  };
  const handleClickOutside = () => setShowEmoji(false);
  useClickOutside(emojiRef, handleClickOutside);

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
            handleMessage();
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
        <div className={classes.emojiContainer} ref={emojiRef}>
          <EmojiPicker
            onEmojiClick={handleEmojiClick}
            autoFocusSearch={false}
          />
        </div>
      )}
      <Button
        onClick={handleMessage}
        disabled={(status && status !== 'ready') || !message.trim().length}
        variant="contained"
        endIcon={<SendIcon />}
      >
        {t('chat.send')}
      </Button>
    </div>
  );
};
