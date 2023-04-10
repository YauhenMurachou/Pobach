import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import DialogItem from 'src/components/dialogs/dialogItem/DialogItem';
import MessageTitle from 'src/components/dialogs/messageTitle/MessageTitle';
import {
  dialogOpenedAction,
  getDialogsAction,
  getMessagesListAction,
  MessagesList,
  messagesListCleared,
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
  const openDialogId = useSelector(
    (state: RootState) => state.dialogs.openDialogId
  );

  useEffect(() => {
    dispatch(getDialogsAction());
  }, []);

  useEffect(
    () => () => {
      dispatch(messagesListCleared());
    },
    []
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
      {!messages && (
        <ul>
          {dialogs.map((dialog) => (
            <MessageTitle
              key={dialog.id}
              dialog={dialog}
              openDialog={() => openDialog(dialog.id)}
              openDialogId={openDialogId as number}
            />
          ))}
        </ul>
      )}
      {!!messages && openDialogId && (
        <Switch>
          <Route
            path="/Dialogs/:id"
            render={() => (
              <DialogItem
                messages={messages as MessagesList}
                dialogId={openDialogId}
              />
            )}
          />
        </Switch>
      )}
    </>
  );
};

export default Dialogs;
