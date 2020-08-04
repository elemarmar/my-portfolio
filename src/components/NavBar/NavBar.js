import React from 'react';
import './NavBar.module.css';
import classes from './NavBar.module.css';

const NavBar = () => {

    return (
        <nav>
            <ul className={classes.NavBar}>
                <li>Projects</li>
                <li>About me</li>
            </ul>
        </nav>
    );
}

export default NavBar;