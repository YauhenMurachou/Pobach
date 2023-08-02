import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Logo from 'src/components/common/atoms/logo/Logo';
import { useTranslateData } from 'src/hooks/useTranslateData';
import { messagesListCleared } from 'src/redux/dialogsReducer';
import { RootState } from 'src/redux/redux-store';

import classes from './Navbar.module.css';

const Navbar: FC = () => {
  const dispatch = useDispatch();
  const { userId, dialogs } = useSelector((state: RootState) => ({
    userId: state.auth.userId,
    dialogs: state.dialogs.dialogs,
  }));

  const { navBarData } = useTranslateData();
  const profilePath = `/Profile/${userId}`;
  const clearMessages = () => dispatch(messagesListCleared());
  const newMessagesCount = dialogs.reduce(
    (accumulator, currentValue) => accumulator + currentValue.newMessagesCount,
    0
  ); // TODO optimization

  return (
    <nav className={classes.nav}>
      {navBarData.map(({ icon, path, text }, index) => (
        <NavLink
          to={index === 0 ? profilePath : path}
          activeClassName={classes.activeLink}
          className={classes.item}
          key={uuidv4()}
          onClick={index === 1 ? clearMessages : undefined}
        >
          {icon}
          {text}
          {index === 1 && !!newMessagesCount && (
            <div className={classes.unreadWrapper}>
              <span className={classes.unread}>{newMessagesCount}</span>
            </div>
          )}
        </NavLink>
      ))}
      <Logo />
    </nav>
  );
};

export default Navbar;
