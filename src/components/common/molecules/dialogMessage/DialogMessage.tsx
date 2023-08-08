import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Avatar, Tooltip } from '@mui/material';
import classNames from 'classnames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { deleteMessageAction } from 'src/redux/dialogsReducer';
import { RootState } from 'src/redux/redux-store';
import { MessageType } from 'src/types';
import { convertDateInTime } from 'src/utils/date';

import classes from './DialogMessage.module.css';

type Props = MessageType & {
  friendAvatar?: string;
};

export const DialogMessage: FC<Props> = memo(
  ({
    addedAt,
    body,
    friendAvatar,
    senderId,
    senderName,
    viewed,
    id,
    deleted,
  }) => {
    const { userId, ownerAvatar } = useSelector((state: RootState) => ({
      userId: state.auth.userId,
      ownerAvatar: state.auth.ownerAvatar,
    }));
    const dispatch = useDispatch();
    const isOwner = userId === senderId;
    const { t } = useTranslation();

    return (
      <div>
        {!deleted && (
          <div
            className={classNames(classes.messageContainer, {
              [classes.incoming]: !isOwner,
              [classes.sent]: isOwner,
              [classes.notViewed]: !viewed,
            })}
          >
            <div className={classes.messageBlock}>
              <NavLink to={'/profile/' + senderId}>
                <Avatar
                  alt={senderName}
                  src={isOwner ? (ownerAvatar as string) : friendAvatar}
                />
              </NavLink>
              <div>
                <div className={classes.authorTitle}>
                  <NavLink
                    to={'/profile/' + senderId}
                    className={classes.author}
                  >
                    {senderName}
                  </NavLink>
                  <span className={classes.sendTime}>
                    {convertDateInTime(addedAt as string)}
                  </span>
                </div>
                <div className={classes.message}>{body}</div>
              </div>
            </div>
            <div className={classes.iconWrapper}>
              <Tooltip
                title={t('chat.delete') as string}
                arrow
                placement="bottom-start"
              >
                <DeleteOutlineIcon
                  className={classes.icon}
                  onClick={() => dispatch(deleteMessageAction(id))}
                />
              </Tooltip>
            </div>
          </div>
        )}
        {deleted && <div>deleted</div>}
      </div>
    );
  }
);
