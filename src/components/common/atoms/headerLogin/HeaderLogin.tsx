import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { useProfilePath } from 'src/hooks/useProfilePath';
import mockAvatar from 'src/images/avatar.png';
import { RootState } from 'src/redux/redux-store';

import classes from './HeaderLogin.module.css';

const HeaderLogin: FC = () => {
  const { userId, ownerAvatar, isAuth, login } = useSelector(
    (state: RootState) => ({
      userId: state.auth.userId,
      ownerAvatar: state.auth.ownerAvatar,
      isAuth: state.auth.isAuth,
      login: state.auth.login,
    })
  );

  const profilePath = useProfilePath(userId as number);
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
