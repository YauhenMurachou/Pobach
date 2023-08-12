import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {
  Avatar,
  Badge,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { FC, MouseEvent } from 'react';
import { NavLink } from 'react-router-dom';

import { useIsOwner } from 'src/hooks/useIsOwner';
import { Dialog } from 'src/types';
import { convertDate } from 'src/utils/date';

import classes from './DialogTitle.module.css';

type Props = {
  dialog: Dialog;
  openDialog: () => void;
  title: string;
  isLast: boolean;
  isViewed: boolean;
  senderId: number;
};

const DialogTitle: FC<Props> = ({
  dialog,
  openDialog,
  title,
  isLast,
  senderId,
  isViewed,
}) => {
  const {
    id,
    userName,
    lastDialogActivityDate,
    hasNewMessages,
    newMessagesCount,
    photos,
  } = dialog;
  const { isOwner, ownerAvatar } = useIsOwner(senderId);

  const openMenu = (e: MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    console.log('openMenu');
  };

  const dialogPath = `/Dialogs/${id}`;

  return (
    <div className={classes.wrapper}>
      <NavLink
        className={classes.container}
        onClick={openDialog}
        to={dialogPath}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={userName} src={photos?.small} />
          </ListItemAvatar>
          <ListItemText
            primary={userName}
            className={classes.userName}
            secondary={
              <div className={classes.secondary}>
                <ListItemAvatar>
                  <div className={classes.avatar}>
                    <Avatar
                      alt={userName}
                      src={isOwner ? (ownerAvatar as string) : photos?.small}
                    />
                  </div>
                </ListItemAvatar>
                <ListItemText
                  secondary={title}
                  className={!isViewed ? classes.subtitle : undefined}
                />
              </div>
            }
          />
          <ListItemIcon className={classes.iconWrapper}>
            <div className={classes.top}>
              <span className={classes.date}>
                {convertDate(lastDialogActivityDate)}
              </span>
              <MoreHorizIcon onClick={openMenu} className={classes.icon} />
            </div>
            {hasNewMessages && (
              <div>
                <Badge badgeContent={newMessagesCount} color="primary" />
              </div>
            )}
          </ListItemIcon>
        </ListItem>
      </NavLink>
      {!isLast && <Divider variant="fullWidth" component="li" />}
    </div>
  );
};

export default DialogTitle;
