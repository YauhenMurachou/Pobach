import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
	return <nav className={classes.nav}>
		<div className={classes.item}>
			<NavLink to="/Profile" activeClassName = { classes.activeLink }>Profile</NavLink>
		</div>
		<div className={classes.item}>
			<NavLink to="/Dialogs" activeClassName = { classes.activeLink }>Dialogs</NavLink>
		</div>
		<div className={classes.item}>
			<a href="#">Feed</a>
		</div>
		<div className={classes.item}>
			<a href="#">Photos</a>
		</div>
		<div className={classes.item}>
			<a href="#">Settings</a>
		</div>
	</nav>
};

export default Navbar;