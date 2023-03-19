import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined';
import { Tooltip } from '@mui/material';
import ChangeLanguage from 'src/components/common/molecules/changeLanguage/ChangeLanguage';
import mockAvatar from 'src/images/avatar.png';
import { logoutDataThunkCreator } from 'src/redux/authReducer';
import { chatActions } from 'src/redux/chatReducer';
import { RootState } from 'src/redux/redux-store';

import classes from './Header.module.css';

const Header: FC = () => {
  const dispatch = useDispatch();
  const { isAuth, login, userId } = useSelector(
    (state: RootState) => state.auth
  );
  const ownerAvatar = useSelector((state: RootState) => state.auth.ownerAvatar);
  const isMuted = useSelector((state: RootState) => state.chat.isMuted);
  const profilePath = `/Profile/${userId}`;

  const { t } = useTranslation();

  const handleMute = () => {
    dispatch(chatActions.setMutedActionCreator(!isMuted));
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
          <ChangeLanguage />
          <Tooltip
            title={
              isMuted
                ? (t('header.unmute') as string)
                : (t('header.mute') as string)
            }
          >
            <span onClick={handleMute} role="button" className={classes.mute}>
              {isMuted ? (
                <NotificationsOffOutlinedIcon />
              ) : (
                <NotificationsNoneOutlinedIcon />
              )}
            </span>
          </Tooltip>
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
