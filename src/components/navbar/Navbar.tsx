import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={classes.nav}>
      <NavLink
        to="/Profile"
        activeClassName={classes.activeLink}
        className={classes.item}
      >
        Profile
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
