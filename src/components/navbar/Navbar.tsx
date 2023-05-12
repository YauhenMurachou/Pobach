import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logo from 'src/components/common/atoms/logo/Logo';
import { useTranslateData } from 'src/hooks/useTranslateData';
import { messagesListCleared } from 'src/redux/dialogsReducer';
import { RootState } from 'src/redux/redux-store';

import classes from './Navbar.module.css';

const Navbar: FC = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state: RootState) => state.auth);
  const { navBarData } = useTranslateData();
  const profilePath = `/Profile/${userId}`;
  const clearMessages = () => dispatch(messagesListCleared());

  return (
    <nav className={classes.nav}>
      {navBarData.map(({ icon, path, text }, index) => (
        <NavLink
          to={index === 0 ? profilePath : path}
          activeClassName={classes.activeLink}
          className={classes.item}
          key={path + text}
          onClick={index === 1 ? clearMessages : undefined}
        >
          {icon}
          {text}
        </NavLink>
      ))}
      <Logo />
    </nav>
  );
};

export default Navbar;
