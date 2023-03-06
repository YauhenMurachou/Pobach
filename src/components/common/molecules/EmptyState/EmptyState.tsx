import { FC } from 'react';
import { ReactComponent as NoResult } from 'src/images/noResult.svg';

import classes from './EmptyState.module.css';

type Props = {
  text: string;
};

const EmptyState: FC<Props> = ({ text }) => (
  <div className={classes.wrapper}>
    <NoResult className={classes.icon} />
    <div className={classes.text}>{text}</div>
  </div>
);

export default EmptyState;
