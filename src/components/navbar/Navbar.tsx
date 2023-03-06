import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import GroupIcon from '@mui/icons-material/Group';
import HandshakeIcon from '@mui/icons-material/Handshake';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhotoIcon from '@mui/icons-material/Photo';
import SettingsIcon from '@mui/icons-material/Settings';
import Logo from 'src/components/common/atoms/logo/Logo';
import { RootState } from 'src/redux/redux-store';

import classes from './Navbar.module.css';

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
        <AccountBoxIcon />
        {t('navbar.profile')}
      </NavLink>
      <NavLink
        to="/Dialogs"
        activeClassName={classes.activeLink}
        className={classes.item}
      >
        <MailOutlineIcon />
        {t('navbar.dialogs')}
      </NavLink>
      <NavLink
        to="/Photos"
        activeClassName={classes.activeLink}
        className={classes.item}
      >
        <PhotoIcon />
        {t('navbar.photos')}
      </NavLink>
      <NavLink
        to="/Settings"
        activeClassName={classes.activeLink}
        className={classes.item}
      >
        <SettingsIcon />
        {t('navbar.settings')}
      </NavLink>
      <NavLink
        to="/Users"
        activeClassName={classes.activeLink}
        className={classes.item}
      >
        <GroupIcon />
        {t('navbar.users')}
      </NavLink>
      <NavLink
        to="/Followers"
        activeClassName={classes.activeLink}
        className={classes.item}
      >
        <HandshakeIcon />
        Followers
        {/* {t('navbar.users')} */}
      </NavLink>
      <NavLink
        to="/Chat"
        activeClassName={classes.activeLink}
        className={classes.item}
      >
        <ChatBubbleOutlineIcon />
        {t('navbar.chat')}
      </NavLink>
      <Logo />
    </nav>
  );
};

export default Navbar;
