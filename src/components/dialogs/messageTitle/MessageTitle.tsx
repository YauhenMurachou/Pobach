import React from 'react';
import { Dialog } from 'src/redux/dialogsReducer';

import classes from './MessageTitle.module.css';

type Props = {
  dialog: Dialog;
  openDialog: () => void;
};

const MessageTitle: React.FC<Props> = ({ dialog, openDialog }) => {
  const {
    // id,
    userName,
    // hasNewMessages,
    lastDialogActivityDate,
    // lastUserActivityDate,
    newMessagesCount,
    photos,
  } = dialog;
  return (
    <li className={classes.container} onClick={openDialog}>
      <img alt={userName} src={photos?.small} />
      <div>{userName}</div>
      <span>{lastDialogActivityDate}</span>
      <span>{newMessagesCount}</span>
    </li>
  );
};

export default MessageTitle;
