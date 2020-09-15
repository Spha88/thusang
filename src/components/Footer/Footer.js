import React from 'react';
import classes from './Footer.module.scss';
import { NavLink, Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={classes.Footer}>
            <div className={classes.FooterInner}>
                <div className={classes.Content}>
                    <div className={classes.Logo}>
                        <h2><Link to="/">Thusang Social Center</Link></h2>
                        <h5><Link to="/">In the service of caring</Link></h5>
                    </div>
                    <ul className={classes.NavItems}>
                        <li><NavLink to="/" exact activeClassName={classes.Active}>Home</NavLink></li>
                        <li><NavLink to="/about" activeClassName={classes.Active}>About Us</NavLink></li>
                        <li><NavLink to="/donate" activeClassName={classes.Active}>Donate</NavLink></li>
                        <li><NavLink to="/contact-us" activeClassName={classes.Active}>Contact</NavLink></li>
                    </ul>
                </div>
                <div className={classes.Signature}>
                    <a href="http://www.netslate.co.za">website by: <br />S.Mehlomakulu</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
