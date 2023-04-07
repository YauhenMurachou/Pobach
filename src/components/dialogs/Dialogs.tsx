import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import DialogItem from 'src/components/dialogs/dialogItem/DialogItem';
import MessageTitle from 'src/components/dialogs/messageTitle/MessageTitle';
import {
  getDialogsAction,
  getMessagesListAction,
} from 'src/redux/dialogsReducer';
import { RootState } from 'src/redux/redux-store';

// import classes from './Dialogs.module.css';

const Dialogs: FC = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const dialogs = useSelector((state: RootState) => state.dialogs.dialogs);
  const messages = useSelector(
    (state: RootState) => state.dialogs.messagesList
  );
  const [openDialogId, setOpenDialogId] = useState<number>();

  useEffect(() => {
    dispatch(getDialogsAction());
  }, []);

  const openDialog = (id: number) => {
    dispatch(getMessagesListAction({ id }));
    setOpenDialogId(id);
  };

  if (!isAuth) {
    return <Redirect to="/Login" />;
  }

  return (
    <>
      {!messages && (
        <ul>
          {dialogs.map((dialog) => (
            <MessageTitle
              key={dialog.id}
              dialog={dialog}
              openDialog={() => openDialog(dialog.id)}
            />
          ))}
        </ul>
      )}
      {!!messages && (
        <DialogItem messages={messages} dialogId={openDialogId as number} />
      )}
    </>
  );
};

export default Dialogs;
