import React from 'react';
import { Link } from 'react-router-dom';

import classes from './LinkButton.module.scss';

const LinkButton = ({ to, label }) => {
    return (
        <Link to={to} className={classes.LinkButton}>{label}</Link>
    )
}

export default LinkButton
