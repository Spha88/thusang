import React from 'react';
import classes from './Hero.module.scss';
import Zoom from 'react-reveal/Zoom';
import background from '../../assets/images/background.png';
import LinkButton from '../UI/LinkButton/LinkButton';

const Hero = () => {
    return (
        <div className={classes.Hero} style={{ backgroundImage: `url(${background})` }}>
            <div className={classes.HeroContent}>
                <Zoom delay={1000}><h1>Make a difference in someone's life</h1></Zoom>
                <Zoom delay={2000}>
                    <LinkButton to="/donate" label="Donate Now" />
                </Zoom>
            </div>
        </div>
    )
}

export default Hero
