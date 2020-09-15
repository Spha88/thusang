import React from 'react';
import classes from './Hero.module.scss';
import background from '../../assets/images/background.png';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className={classes.Hero} style={{ backgroundImage: `url(${background})` }}>
            <div className={classes.HeroContent}>
                <h1>Make a difference in someone's life</h1>
                <Link to="/donate"><button>Donate Now</button></Link>
            </div>
        </div>
    )
}

export default Hero
