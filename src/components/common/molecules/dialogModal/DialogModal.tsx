import { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import Modal from '@mui/material/Modal';
import DialogsForm from 'src/components/dialogs/DialogsForm';
import {
  dialogOpenedAction,
  sendMessageAction,
} from 'src/redux/dialogsReducer';
import { UserType } from 'src/types';

import classes from './DialogModal.module.css';

type ValuesType = {
  newMessage: string;
};

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  companion: UserType;
  setPopperOpen?: Dispatch<SetStateAction<boolean>>;
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

  const addNewMessageForm = (values: ValuesType) => {
    dispatch(sendMessageAction({ id, body: values.newMessage }));
    values.newMessage = '';
    handleClose();
    setPopperOpen?.(true);
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
          <DialogsForm onSubmit={addNewMessageForm} />
        </div>
      </Modal>
    </div>
  );
};

export default DialogModal;
