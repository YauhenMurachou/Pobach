import LogoutIcon from '@mui/icons-material/Logout';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logoutDataThunkCreator } from 'src/redux/authReducer';
import { RootState } from 'src/redux/redux-store';

import classes from './HeaderLogout.module.css';

const HeaderLogout: FC = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state: RootState) => state.auth);

  const { t } = useTranslation();

  const logoutOnClick = () => {
    dispatch(logoutDataThunkCreator());
  };

  return (
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
  );
};

export default HeaderLogout;
