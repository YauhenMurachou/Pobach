import CloseIcon from '@mui/icons-material/Close';
import { Avatar, IconButton } from '@mui/material';
import Modal from '@mui/material/Modal';
import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import LastVisit from 'src/components/common/atoms/lastVisit/LastVisit';
import { SendMessageForm } from 'src/components/common/molecules/sendMessageForm/SendMessageForm';
import {
  dialogOpenedAction,
  getDialogsAction,
  sendMessageAction,
} from 'src/redux/dialogsReducer';
import { RootState } from 'src/redux/redux-store';
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
  const dialogs = useSelector((state: RootState) => state.dialogs.dialogs);

  useEffect(() => {
    dispatch(getDialogsAction());
  }, []); // eslint-disable-line

  const { name, id, photos } = companion || {};
  const currentDialog = dialogs.find((dialog) => dialog.id === id);
  const { lastUserActivityDate } = currentDialog || {};
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
            <h5 className={classes.newMessage}>
              {t('dialogModal.newMessage')}
            </h5>
            <div className={classes.rightBlock}>
              <NavLink
                to={dialogPath}
                onClick={() => openDialog(id)}
                className={classes.redirect}
              >
                {t('dialogModal.redirect')} {name}
              </NavLink>
              <span className={classes.closeIcon}>
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </span>
            </div>
          </div>
          <div className={classes.line}></div>
          <div className={classes.friend}>
            <NavLink to={'/profile/' + id}>
              <Avatar alt={name} src={photos?.small ?? ''} />
            </NavLink>
            <div className={classes.companion}>
              <NavLink to={'/profile/' + id} className={classes.name}>
                {name}
              </NavLink>
              <LastVisit date={lastUserActivityDate as string} />
            </div>
          </div>
          <SendMessageForm sendMessageDialog={sendMessage} />
        </div>
      </Modal>
    </div>
  );
};

export default DialogModal;
