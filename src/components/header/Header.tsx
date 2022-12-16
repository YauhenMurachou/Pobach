import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logoutDataThunkCreator } from '../../redux/authReducer';
import { RootState } from '../../redux/redux-store';

import './Header.css';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuth, login } = useSelector((state: RootState) => state.auth);

  const logoutOnClick = () => {
    dispatch(logoutDataThunkCreator());
  };

  return (
    <header className="header">
      <img
        className="header-image"
        alt="label"
        src="https://st2.depositphotos.com/5378240/8287/v/600/depositphotos_82877606-stock-illustration-belorussian-sacred-ethnic-ornament-seamless.jpg"
      />
      <div className="header-text-wrapper">
        <div className="header-text">
          <span className="header-text-near">Побач</span>
          <span className="header-text-social">cацыяльная сетка беларусаў</span>
        </div>
        <div className="header-text">
          {isAuth ? login : <NavLink to={'/login'}> Login</NavLink>}
        </div>
        <div className="header-text">
          {isAuth && (
            <NavLink to={'/login'} onClick={logoutOnClick}>
              Logout
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
