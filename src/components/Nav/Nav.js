import React from 'react';
import classes from './Nav.module.scss';

const Nav = () => {
    return (
        <header className={classes.NavContainer}>
            <nav className={classes.Nav}>
                <div className={classes.Logo}>
                    <h2>Thusang Social Center</h2>
                    <h5>In the service of caring</h5>
                </div>
                <ul className={classes.NavItems}>
                    <li><a href="!#" className={classes.Active}>Home</a></li>
                    <li><a href="!#">About Us</a></li>
                    <li><a href="!#">Donate</a></li>
                    <li><a href="!#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav
