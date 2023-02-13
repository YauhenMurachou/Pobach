import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import DialogsForm from 'src/components/dialogs/DialogsForm';
import { dialogsActions } from 'src/redux/dialogsPageReducer';
import { getDialogsAction } from 'src/redux/dialogsReducer';
import { RootState } from 'src/redux/redux-store';

import classes from './Dialogs.module.css';

type ValuesType = {
  newMessage: string;
};

const Dialogs: FC = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const dialogs = useSelector((state: RootState) => state.dialogs.dialogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDialogsAction());
  }, []);

  const addNewMessageForm = (values: ValuesType) =>
    dispatch(dialogsActions.addMessageActionCreator(values.newMessage));

  if (!isAuth) {
    return <Redirect to="/Login" />;
  }

  return (
    <div className={classes.dialogs}>
      <ul>
        {dialogs.map((dialog) => (
          <li key={dialog.id}>{dialog.userName}</li>
        ))}
      </ul>
      <div className={classes.messages}>
        <DialogsForm onSubmit={addNewMessageForm} />
      </div>
    </div>
  );
};

export default Dialogs;
