import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Avatar, Button } from '@mui/material';
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
          {t('dialogs.online')} {convertDate(lastUserActivityDate as string)}{' '}
          {t('dialogs.at')} {convertDateInTime(lastUserActivityDate as string)}
        </span>
      </div>
      <NavLink to={'/profile/' + userId}>
        <Avatar alt={userName} src={friendAvatar} />
      </NavLink>
    </div>
  );
};
export default MessagesHeader;
