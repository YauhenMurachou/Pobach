import { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Messages } from 'src/components/chat/messages/Messages';
import Loader from 'src/components/common/atoms/loader/Loader';
import { SendMessageForm } from 'src/components/common/molecules/sendMessageForm/SendMessageForm';
import { sendMessageThunkCreator } from 'src/redux/chatReducer';
import { RootState } from 'src/redux/redux-store';

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
          <SendMessageForm
            status={status}
            sendMessageChat={sendMessageThunkCreator}
          />
        </>
      )}
    </>
  );
});
