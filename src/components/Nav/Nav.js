import React, { useState } from 'react';
import classes from './Nav.module.scss';
import { NavLink, Link } from 'react-router-dom';
import burger_icon from '../../assets/images/burger_icon.svg';

const Nav = () => {
    const [openNav, setOpenNav] = useState(false);
    return (
        <header className={classes.NavContainer}>
            <nav className={classes.Nav}>
                <div className={classes.Logo}>
                    <h2><Link to="/">Thusang Social Center</Link></h2>
                    <h5><Link to="/">In the service of caring</Link></h5>
                </div>
                <div className={classes.NavIconContainer} onClick={() => setOpenNav(!openNav)}>
                    <img src={burger_icon} alt="nav icon" />
                </div>
                <ul className={classes.NavItems}>
                    <li><NavLink activeClassName={classes.Active} exact to="/">Home</NavLink></li>
                    <li><NavLink activeClassName={classes.Active} to="/about">About Us</NavLink></li>
                    <li><NavLink activeClassName={classes.Active} to="/donate">Donate</NavLink></li>
                    <li><NavLink activeClassName={classes.Active} to="/contact-us">Contact</NavLink></li>
                </ul>
                <ul className={`${classes.NavItemsMobile} ${openNav && classes.open}`} onClick={() => setOpenNav(!openNav)}>
                    <li className={classes.NavLogo}>
                        <h2>Thusang Social Center</h2>
                        <h5>In the service of caring</h5>
                    </li>
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
