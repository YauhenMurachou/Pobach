import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import mockAvatar from 'src/images/avatar.png';
import { RootState } from 'src/redux/redux-store';

import classes from './HeaderLogin.module.css';

const HeaderLogin: FC = () => {
  const { isAuth, login, userId } = useSelector(
    (state: RootState) => state.auth
  );
  const ownerAvatar = useSelector((state: RootState) => state.auth.ownerAvatar);
  const profilePath = `/Profile/${userId}`;

  const { t } = useTranslation();

  return (
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
  );
};

export default HeaderLogin;
