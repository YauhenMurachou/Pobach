import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../../redux/redux-store';
import classes from './Navbar.module.css';

const Navbar: React.FC = () => {
  const { userId } = useSelector((state: RootState) => state.auth);
  const profilePath = `/Profile/${userId}`;

  return (
    <nav className={classes.nav}>
      <NavLink
        to={profilePath}
        activeClassName={classes.activeLink}
        className={classes.item}
      >
        My profile
      </NavLink>
      <NavLink
        to="/Dialogs"
        activeClassName={classes.activeLink}
        className={classes.item}
      >
        Dialogs
      </NavLink>
      <NavLink
        to="/Feed"
        activeClassName={classes.activeLink}
        className={classes.item}
      >
        Feed
      </NavLink>
      <NavLink
        to="/Photos"
        activeClassName={classes.activeLink}
        className={classes.item}
      >
        Photos
      </NavLink>
      <NavLink
        to="/Settings"
        activeClassName={classes.activeLink}
        className={classes.item}
      >
        Settings
      </NavLink>
      <NavLink
        to="/Users"
        activeClassName={classes.activeLink}
        className={classes.item}
      >
        Users
      </NavLink>
      <NavLink
        to="/Chat"
        activeClassName={classes.activeLink}
        className={classes.item}
      >
        Chat
      </NavLink>
    </nav>
  );
};

export default Navbar;
