import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
	return <nav className={classes.nav}>
		<div className={classes.item}>
			<NavLink to="/Profile" activeClassName={classes.activeLink}>Profile</NavLink>
		</div>
		<div className={classes.item}>
			<NavLink to="/Dialogs" activeClassName={classes.activeLink}>Dialogs</NavLink>
		</div>
		<div className={classes.item}>
			<NavLink to="/Feed" activeClassName={classes.activeLink}>Feed</NavLink>
		</div>
		<div className={classes.item}>
			<NavLink to="/Photos" activeClassName={classes.activeLink}>Photos</NavLink>
		</div>
		<div className={classes.item}>
			<NavLink to="/Settings" activeClassName={classes.activeLink}>Settings</NavLink>
		</div>
		<div className={classes.item}>
			<NavLink to="/Users" activeClassName={classes.activeLink}>Users</NavLink>
		</div>
	</nav>
};

export default Navbar;