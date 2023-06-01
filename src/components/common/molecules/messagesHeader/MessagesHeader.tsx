import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CallIcon from '@mui/icons-material/Call';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar, Button, IconButton } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { convertDate, convertDateInTime } from 'src/utils/date';

import classes from './MessagesHeader.module.css';

type Props = {
  friendAvatar?: string;
  userName?: string;
  lastUserActivityDate?: string;
  userId?: number;
};

const MessagesHeader: FC<Props> = ({
  friendAvatar,
  userName,
  lastUserActivityDate,
  userId,
}) => {
  const { t } = useTranslation();

  return (
    <div className={classes.wrapper}>
      <NavLink to="/Dialogs">
        <Button variant="contained" startIcon={<ArrowBackIosIcon />}>
          {t('dialogs.back')}
        </Button>
      </NavLink>
      <div className={classes.title}>
        <NavLink to={'/profile/' + userId}>
          <h5>{userName}</h5>
        </NavLink>
        <span className={classes.online}>
          {t('dialogs.online')}{' '}
          {lastUserActivityDate && convertDate(lastUserActivityDate)}{' '}
          {t('dialogs.at')}{' '}
          {lastUserActivityDate && convertDateInTime(lastUserActivityDate)}
        </span>
      </div>
      <div className={classes.rightBlock}>
        <IconButton>
          <CallIcon />
        </IconButton>
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
        <NavLink to={'/profile/' + userId}>
          <Avatar alt={userName} src={friendAvatar} />
        </NavLink>
      </div>
    </div>
  );
};
export default MessagesHeader;
