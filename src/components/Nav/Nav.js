import React from 'react';
import classes from './Nav.module.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <header className={classes.NavContainer}>
            <nav className={classes.Nav}>
                <div className={classes.Logo}>
                    <h2>Thusang Social Center</h2>
                    <h5>In the service of caring</h5>
                </div>
                <ul className={classes.NavItems}>
                    <li><NavLink to="/" className={classes.Active}>Home</NavLink></li>
                    <li><NavLink to="/about">About Us</NavLink></li>
                    <li><NavLink to="/Donate">Donate</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav
