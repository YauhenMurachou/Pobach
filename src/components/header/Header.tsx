import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import Diversity3Icon from '@mui/icons-material/Diversity3';

import { logoutDataThunkCreator } from '../../redux/authReducer';
import { RootState } from '../../redux/redux-store';

import classes from './Header.module.css';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuth, login, userId } = useSelector(
    (state: RootState) => state.auth
  );
  const avatar = useSelector(
    (state: RootState) => state.profilePage.profile.photos?.small
  );
  const profilePath = `/Profile/${userId}`;

  const logoutOnClick = () => {
    dispatch(logoutDataThunkCreator());
  };

  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <div className={classes.logo}>
          <Diversity3Icon className={classes.image} fontSize="large" />
          <span className={classes.near}>Побач</span>
          <span className={classes.social}>cацыяльная сетка</span>
        </div>
        <div>
          <div className={classes.login}>
            {isAuth ? (
              <div>
                <div className={classes.sign}>You signed in as </div>
                <div className={classes.name}>
                  <NavLink to={profilePath}>
                    <img alt="avatar" src={avatar} className={classes.avatar} />
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
                Sign out
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
