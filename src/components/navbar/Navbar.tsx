import { FC } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logo from 'src/components/common/atoms/logo/Logo';
import { navBarData } from 'src/components/navbar/navbarData';
import { RootState } from 'src/redux/redux-store';

import classes from './Navbar.module.css';

const Navbar: FC = () => {
  const { userId } = useSelector((state: RootState) => state.auth);
  const profilePath = `/Profile/${userId}`;

  return (
    <nav className={classes.nav}>
      {navBarData.map(({ icon, path, text }, index) => (
        <NavLink
          to={index === 0 ? profilePath : path}
          activeClassName={classes.activeLink}
          className={classes.item}
        >
          {icon}
          {text}
        </NavLink>
      ))}
      <Logo />
    </nav>
  );
};

export default Navbar;
