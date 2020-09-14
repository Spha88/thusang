import React from 'react';
import classes from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={classes.Footer}>
            <div className={classes.FooterInner}>
                <div className={classes.Content}>
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
                </div>
                <div className={classes.Signature}>
                    website by: S.Mehlomakulu
                </div>
            </div>
        </footer>
    )
}

export default Footer
