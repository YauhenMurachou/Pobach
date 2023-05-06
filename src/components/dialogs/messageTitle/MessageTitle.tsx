import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import { Dialog } from 'src/types';

import classes from './MessageTitle.module.css';

type Props = {
  dialog: Dialog;
  openDialog: () => void;
};

const MessageTitle: FC<Props> = ({ dialog, openDialog }) => {
  const {
    id,
    userName,
    // hasNewMessages,
    // lastDialogActivityDate,
    // lastUserActivityDate,
    // newMessagesCount,
    photos,
  } = dialog;

  const dialogPath = `/Dialogs/${id}`;

  return (
    <>
      {/* <NavLink
        className={classes.container}
        onClick={openDialog}
        to={dialogPath}
      > */}
      {/* <img alt={userName} src={photos?.small} />
        <div>{userName}</div> */}
      {/* <span>{lastDialogActivityDate}</span>
        <span>{newMessagesCount}</span>
      </NavLink> */}
      <NavLink
        className={classes.container}
        onClick={openDialog}
        to={dialogPath}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            {/* Remy Sharp */}
            <Avatar alt={userName} src={photos?.small} />
          </ListItemAvatar>
          <ListItemText
            primary={userName}
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </>
            }
          />
        </ListItem>
      </NavLink>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default MessageTitle;
