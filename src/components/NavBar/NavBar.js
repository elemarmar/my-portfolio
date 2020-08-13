import React from 'react';
import './NavBar.module.css';
import classes from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul className={classes.NavBar}>
        <li>
          <NavLink
            activeClassName={classes.NavBarActive}
            className={classes.NavBarLink}
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={classes.NavBarActive}
            className={classes.NavBarLink}
            to="/about"
          >
            About me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
