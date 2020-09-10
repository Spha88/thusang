import React from 'react';
import classes from './Hero.module.scss';
import background from '../../assets/images/background.png'

const Hero = () => {
    return (
        <div className={classes.Hero} style={{ background: `url(${background})`}}>
            <div className={classes.HeroContent}>
                <h1>Make a difference in someone's life</h1>
                <button>Donate Now</button>
            </div>
        </div>
    )
}

export default Hero
