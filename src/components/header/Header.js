import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
	return <header className='header'>
		<img className='header-image' src='https://st2.depositphotos.com/5378240/8287/v/600/depositphotos_82877606-stock-illustration-belorussian-sacred-ethnic-ornament-seamless.jpg' />
		<div className='header-text-wrapper'>
			<div className='header-text'>
				<span className='header-text-near'>Побач</span>
				<span className='header-text-social'>cацыяльная сетка беларусаў</span>
			</div>
			<div className='header-text'>
				{props.isAuth ? props.login
					: <NavLink to={'/login'}> Login</NavLink>}
			</div>
		</div>
	</header>
};

export default Header;