import { FC, MouseEvent } from 'react';
import { NavLink } from 'react-router-dom';
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
import { Dialog } from 'src/types';
import { convertDate } from 'src/utils/date';

import classes from './DialogTitle.module.css';

type Props = {
  dialog: Dialog;
  openDialog: () => void;
  title: string;
  isLast: boolean;
};

const DialogTitle: FC<Props> = ({ dialog, openDialog, title, isLast }) => {
  const {
    id,
    userName,
    lastDialogActivityDate,
    hasNewMessages,
    newMessagesCount,
    photos,
  } = dialog;

  const openMenu = (e: MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    console.log('openMenu');
  };

  const dialogPath = `/Dialogs/${id}`;

  return (
    <li className={classes.wrapper}>
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
            secondary={title}
            className={classes.userName}
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
    </li>
  );
};

export default DialogTitle;
