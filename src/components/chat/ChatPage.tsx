import { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Messages } from 'src/components/chat/messages/Messages';
import { AddMessageForm } from 'src/components/common/molecules/addMessageForm/AddMessageForm';
import Loader from 'src/components/loader/Loader';
import { RootState } from 'src/redux/redux-store';

// import classes from './ChatPage.module.css';

export const ChatPage: FC = memo(() => {
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const status = useSelector((state: RootState) => state.chat.status);

  if (!isAuth) {
    return <Redirect to="/Login" />;
  }

  return (
    <>
      {status === 'pending' && <Loader isFetching={status === 'pending'} />}
      {status === 'ready' && (
        <>
          <Messages />
          <AddMessageForm />
        </>
      )}
    </>
  );
});
