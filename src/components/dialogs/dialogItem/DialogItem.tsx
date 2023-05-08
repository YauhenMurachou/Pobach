import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button } from '@mui/material';
import DialogsForm from 'src/components/dialogs/DialogsForm';
import {
  getMessagesListAction,
  sendMessageAction,
  updateTitleAction,
} from 'src/redux/dialogsReducer';
import { RootState } from 'src/redux/redux-store';

import classes from './DialogItem.module.css';

type ValuesType = {
  newMessage: string;
};

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

  const sendMessage = (values: ValuesType) => {
    const message = { id, body: values.newMessage };
    dispatch(sendMessageAction(message));
    dispatch(updateTitleAction(message));
    values.newMessage = '';
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
          <div>
            {messages?.items.map((message) => (
              <div key={message.id}>{message.body}</div>
            ))}
          </div>
        </>
      ) : (
        <div>{t('dialogs.empty')}</div>
      )}
      <div className={classes.messages}>
        <DialogsForm onSubmit={sendMessage} />
      </div>
    </>
  );
};

export default DialogItem;
