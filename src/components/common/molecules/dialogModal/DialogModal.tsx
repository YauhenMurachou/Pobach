import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import Modal from '@mui/material/Modal';
import DialogsForm from 'src/components/dialogs/DialogsForm';
import { sendMessageAction } from 'src/redux/dialogsReducer';
import { UserType } from 'src/types';

import classes from './DialogModal.module.css';

type ValuesType = {
  newMessage: string;
};

type Props = {
  isOpen: boolean;
  handleClose: (companion: UserType) => void;
  companion: UserType;
};

const DialogModal: FC<Props> = ({ isOpen, handleClose, companion }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { name, id } = companion || {};

  const addNewMessageForm = (values: ValuesType) => {
    dispatch(sendMessageAction({ id, body: values.newMessage }));
    values.newMessage = '';
  };

  return (
    <div className={classes.wrapper}>
      <Modal open={isOpen} onClose={handleClose} className={classes.modal}>
        <div>
          <div className={classes.title}>
            <h5>{t('dialogModal.newMessage')}</h5>
            <div>
              {t('dialogModal.redirect')}
              {name}
            </div>
          </div>
          <div>{name}</div>
          <DialogsForm onSubmit={addNewMessageForm} />
        </div>
      </Modal>
    </div>
  );
};

export default DialogModal;
