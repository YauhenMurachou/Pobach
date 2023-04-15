import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dialog } from 'src/types';

import classes from './MessageTitle.module.css';

type Props = {
  dialog: Dialog;
  openDialog: () => void;
};

const MessageTitle: React.FC<Props> = ({
  dialog,
  openDialog,
}) => {
  const {
    id,
    userName,
    // hasNewMessages,
    lastDialogActivityDate,
    // lastUserActivityDate,
    newMessagesCount,
    photos,
  } = dialog;

  const dialogPath = `/Dialogs/${id}`;

  return (
    <NavLink className={classes.container} onClick={openDialog} to={dialogPath}>
      <img alt={userName} src={photos?.small} />
      <div>{userName}</div>
      <span>{lastDialogActivityDate}</span>
      <span>{newMessagesCount}</span>
    </NavLink>
  );
};

export default MessageTitle;
