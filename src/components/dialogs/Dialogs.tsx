import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import MessageTitle from 'src/components/dialogs/messageTitle/MessageTitle';
import {
  dialogOpenedAction,
  getDialogsAction,
  getMessagesListAction,
  messagesListCleared,
} from 'src/redux/dialogsReducer';
import { RootState } from 'src/redux/redux-store';

// import classes from './Dialogs.module.css';

const Dialogs: FC = () => {
  const dispatch = useDispatch();
  const { isAuth, dialogs } = useSelector((state: RootState) => ({
    isAuth: state.auth,
    dialogs: state.dialogs.dialogs,
  }));

  useEffect(() => {
    dispatch(getDialogsAction());
  }, []); // eslint-disable-line

  useEffect(
    () => () => {
      dispatch(messagesListCleared());
    },
    [] // eslint-disable-line
  );

  const openDialog = (id: number) => {
    dispatch(getMessagesListAction({ id }));
    dispatch(dialogOpenedAction({ id }));
  };

  if (!isAuth) {
    return <Redirect to="/Login" />;
  }

  return (
    <>
      <ul>
        {dialogs.map((dialog) => (
          <MessageTitle
            key={dialog.id}
            dialog={dialog}
            openDialog={() => openDialog(dialog.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default Dialogs;
