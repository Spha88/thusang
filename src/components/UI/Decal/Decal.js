import React from 'react'
import classes from './Decal.module.scss';
import decal_bg from '../../../assets/images/decal_bg.png';

const Decal = ({ heading, color }) => {
    return (
        <div className={classes.Decal} style={{ backgroundImage: `url(${decal_bg})` }}>
            <div className={classes.DecalInner}>
                <h2>{heading}</h2>
            </div>
        </div>
    )
}

export default Decal 
