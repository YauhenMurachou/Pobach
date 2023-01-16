import React, { MouseEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import mockAvatar from '../../images/avatar.png';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';
import { Button, Popover } from '@mui/material';

import { logoutDataThunkCreator } from '../../redux/authReducer';
import { RootState } from '../../redux/redux-store';

import classes from './Header.module.css';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuth, login, userId } = useSelector(
    (state: RootState) => state.auth
  );
  const ownerAvatar = useSelector((state: RootState) => state.auth.ownerAvatar);
  const profilePath = `/Profile/${userId}`;

  const { t, i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = useState<(EventTarget & HTMLElement) | null>(
    null
  );
  const [open, setOpen] = useState(false);

  const handleClick = (
    event: MouseEvent<HTMLLabelElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
    setOpen((prevState) => !prevState);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    handleClose();
  };

  const logoutOnClick = () => {
    dispatch(logoutDataThunkCreator());
  };

  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <div className={classes.logo}>
          <Diversity3Icon className={classes.image} fontSize="large" />
          <span className={classes.near}>побач</span>
          <span className={classes.social}>{t('header.social')}</span>
        </div>
        <div className={classes.rightBlock}>
          <span
            onClick={handleClick}
            role="button"
            className={classes.language}
          >
            <LanguageIcon />
          </span>

          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <div className={classes.popoverWrapper}>
              <Button
                variant="contained"
                component="label"
                onClick={() => changeLanguage('by')}
              >
                {t('header.belarusian')}
              </Button>
              <Button
                variant="contained"
                component="label"
                onClick={() => changeLanguage('en')}
                // disabled={!isAvatar}
              >
                {t('header.english')}
              </Button>
            </div>
          </Popover>
          <div className={classes.login}>
            {isAuth ? (
              <div>
                <div className={classes.sign}>{t('header.signin')}</div>
                <div className={classes.name}>
                  <NavLink to={profilePath}>
                    <img
                      alt="avatar"
                      src={ownerAvatar ?? mockAvatar}
                      className={classes.avatar}
                    />
                    <span> {login}</span>
                  </NavLink>
                </div>
              </div>
            ) : (
              <NavLink to={'/login'}> Login</NavLink>
            )}
          </div>
          <div className={classes.text}>
            {isAuth && (
              <NavLink to={'/login'} onClick={logoutOnClick}>
                <div>
                  <LogoutIcon />
                </div>
                {t('header.signout')}
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
