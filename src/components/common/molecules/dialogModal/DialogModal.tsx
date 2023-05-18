import { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import Modal from '@mui/material/Modal';
import { SendMessageForm } from 'src/components/common/molecules/sendMessageForm/SendMessageForm';
import {
  dialogOpenedAction,
  sendMessageAction,
} from 'src/redux/dialogsReducer';
import { UserType } from 'src/types';

import classes from './DialogModal.module.css';

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  companion: UserType;
  setPopperOpen: Dispatch<SetStateAction<boolean>>;
};

const DialogModal: FC<Props> = ({
  isOpen,
  handleClose,
  companion,
  setPopperOpen,
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { name, id } = companion || {};
  const dialogPath = `/Dialogs/${id}`;

  const sendMessage = (newMessage: string) => {
    const message = { id, body: newMessage };
    dispatch(sendMessageAction(message));
    handleClose();
    setPopperOpen(true);
  };

  const openDialog = (id: number) => {
    dispatch(dialogOpenedAction({ id }));
  };

  return (
    <div className={classes.wrapper}>
      <Modal open={isOpen} onClose={handleClose} className={classes.modal}>
        <div>
          <div className={classes.title}>
            <h5>{t('dialogModal.newMessage')}</h5>
            <div>
              {t('dialogModal.redirect')}
              <NavLink to={dialogPath} onClick={() => openDialog(id)}>
                {name}
              </NavLink>
            </div>
            <span className={classes.closeIcon}>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </span>
          </div>
          <div>{name}</div>
          <SendMessageForm sendMessageDialog={sendMessage} />
        </div>
      </Modal>
    </div>
  );
};

export default DialogModal;
