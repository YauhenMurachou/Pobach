import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Tooltip } from '@mui/material';
import classNames from 'classnames';
import { FC, memo, useCallback, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { DeletedMessage } from 'src/components/common/molecules/deletedMessage/DeletedMessage';
import avatar from 'src/images/avatar.png';
import { chatActions } from 'src/redux/chatReducer';
import { RootState } from 'src/redux/redux-store';
import { ChatMessage } from 'src/types';

import classes from './Messages.module.css';

const Message: FC<ChatMessage> = memo(
  ({ message, userName, photo, userId, id, deleted }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const handleDeleteMessage = () => {
      dispatch(chatActions.deleteMessageActionCreator(id as string));
    };

    const restoreMessage = useCallback(() => {
      dispatch(chatActions.restoreMessageActionCreator(id as string));
    }, []);

    return (
      <div
        className={classNames(classes.messageContainer, {
          [classes.deleted]: deleted,
        })}
      >
        <div className={classes.messageBlock}>
          {!deleted && (
            <NavLink to={'/profile/' + userId}>
              <img
                src={photo ?? avatar}
                alt={userName}
                className={classes.avatar}
              />
            </NavLink>
          )}
          <div>
            {!deleted && (
              <NavLink to={'/profile/' + userId}>
                <div className={classes.author}>{userName}</div>
              </NavLink>
            )}
            {!deleted && <div className={classes.message}>{message}</div>}
            {deleted && <DeletedMessage restoreMessage={restoreMessage} />}
          </div>
        </div>
        {!deleted && (
          <div className={classes.iconWrapper}>
            <Tooltip
              title={t('chat.delete') as string}
              arrow
              placement="bottom-start"
            >
              <DeleteOutlineIcon
                onClick={handleDeleteMessage}
                className={classes.icon}
              />
            </Tooltip>
          </div>
        )}
      </div>
    );
  }
);

export const Messages: FC = memo(() => {
  const messages = useSelector((state: RootState) => state.chat.messages);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView();
  }, [messages]);

  return (
    <div className={classes.messagesWrapper}>
      {messages.map(
        ({ id, userId, message, photo, userName, deleted, deletedMessage }) => (
          <Message
            key={id}
            userId={userId}
            message={message}
            photo={photo}
            userName={userName}
            id={id}
            deleted={deleted}
            deletedMessage={deletedMessage}
          />
        )
      )}
      <div ref={scrollRef}></div>
    </div>
  );
});
