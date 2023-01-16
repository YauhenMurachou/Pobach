import { FC } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../../redux/redux-store';
import classes from './Navbar.module.css';
import Logo from '../common/logo/Logo';
import { useTranslation } from 'react-i18next';

const Navbar: FC = () => {
  const { userId } = useSelector((state: RootState) => state.auth);
  const profilePath = `/Profile/${userId}`;
  const { t } = useTranslation();

  return (
    <nav className={classes.nav}>
      <NavLink
        to={profilePath}
        activeClassName={classes.activeLink}
        className={classes.item}
      >
        {t('navbar.profile')}
      </NavLink>
      <NavLink
        to="/Dialogs"
        activeClassName={classes.activeLink}
        className={classes.item}
      >
        {t('navbar.dialogs')}
      </NavLink>
      <NavLink
        to="/Photos"
        activeClassName={classes.activeLink}
        className={classes.item}
      >
        {t('navbar.photos')}
      </NavLink>
      <NavLink
        to="/Settings"
        activeClassName={classes.activeLink}
        className={classes.item}
      >
        {t('navbar.settings')}
      </NavLink>
      <NavLink
        to="/Users"
        activeClassName={classes.activeLink}
        className={classes.item}
      >
        {t('navbar.users')}
      </NavLink>
      <NavLink
        to="/Chat"
        activeClassName={classes.activeLink}
        className={classes.item}
      >
        {t('navbar.chat')}
      </NavLink>
      <Logo />
    </nav>
  );
};

export default Navbar;
