import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button } from '@mui/material';
import { SendMessageForm } from 'src/components/common/molecules/sendMessageForm/SendMessageForm';
import {
  getMessagesListAction,
  sendMessageAction,
  updateTitleAction,
} from 'src/redux/dialogsReducer';
import { RootState } from 'src/redux/redux-store';

import classes from './DialogItem.module.css';

const DialogItem: FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const id = +useParams<{ id: string }>().id;

  useEffect(() => {
    dispatch(getMessagesListAction({ id }));
  }, [id]); // eslint-disable-line

  const messages = useSelector(
    (state: RootState) => state.dialogs.messagesList
  );

  const sendMessage = (newMessage: string) => {
    const message = { id, body: newMessage };
    dispatch(sendMessageAction(message));
    dispatch(updateTitleAction(message));
  };

  return (
    <>
      <NavLink to="/Dialogs">
        <Button variant="contained" startIcon={<ArrowBackIosIcon />}>
          {t('dialogs.back')}
        </Button>
      </NavLink>
      {messages?.items.length ? (
        <>
          {messages?.items.map((message) => (
            <div key={message.id}>{message.body}</div>
          ))}
        </>
      ) : (
        <div>{t('dialogs.empty')}</div>
      )}
      <div className={classes.messages}>
        <SendMessageForm sendMessageDialog={sendMessage} />
      </div>
    </>
  );
};

export default DialogItem;
