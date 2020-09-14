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
                    <li><NavLink activeClassName={classes.Active} exact to="/">Home</NavLink></li>
                    <li><NavLink activeClassName={classes.Active} to="/about">About Us</NavLink></li>
                    <li><NavLink activeClassName={classes.Active} to="/donate">Donate</NavLink></li>
                    <li><NavLink activeClassName={classes.Active} to="/contact-us">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav
