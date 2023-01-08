import { FC } from 'react';

import Diversity3Icon from '@mui/icons-material/Diversity3';
import { SvgIcon } from '@mui/material';

import classes from './Logo.module.css';

const Logo: FC = () => {
  return (
    <div className={classes.logo}>
      <Diversity3Icon className={classes.image} fontSize="medium" />
      <span className={classes.tradeMark}> Побач © 2023</span>
      <SvgIcon />
    </div>
  );
};

export default Logo;
