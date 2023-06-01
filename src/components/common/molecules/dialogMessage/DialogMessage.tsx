import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Avatar, Tooltip } from '@mui/material';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { RootState } from 'src/redux/redux-store';
import { MessageType } from 'src/types';
import { convertDateInTime } from 'src/utils/date';

import classes from './DialogMessage.module.css';

type Props = MessageType & {
  friendAvatar?: string;
};

export const DialogMessage: FC<Props> = memo(
  ({ addedAt, body, friendAvatar, senderId, senderName }) => {
    const { userId, ownerAvatar } = useSelector(
      (state: RootState) => state.auth
    );

    const isOwner = userId === senderId;
    const { t } = useTranslation();

    return (
      <div className={classes.messageContainer}>
        <div className={classes.messageBlock}>
          <NavLink to={'/profile/' + senderId}>
            <Avatar
              alt={senderName}
              src={isOwner ? (ownerAvatar as string) : friendAvatar}
            />
          </NavLink>
          <div>
            <div className={classes.authorTitle}>
              <NavLink to={'/profile/' + senderId} className={classes.author}>
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
            <DeleteOutlineIcon className={classes.icon} />
          </Tooltip>
        </div>
      </div>
    );
  }
);
