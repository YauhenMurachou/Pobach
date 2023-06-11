import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { convertDate, convertDateInTime } from 'src/utils/date';

import classes from './LastVisit.module.css';

type Props = {
  date: string;
};

const LastVisit: FC<Props> = ({ date }) => {
  const { t } = useTranslation();

  return (
    <div className={classes.online}>
      {t('dialogs.online')} {date && convertDate(date)} {t('dialogs.at')}{' '}
      {date && convertDateInTime(date)}
    </div>
  );
};

export default LastVisit;
