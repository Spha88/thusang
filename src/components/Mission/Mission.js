import React from 'react';
import Container from '../UI/Container/Container';
import classes from './Mission.module.scss';
import mission_img from '../../assets/images/mission_img.png';

const Mission = () => {
    return (
        <Container>
            <div className={classes.Mission}>
                <div className={classes.Image}>
                    <img src={mission_img} alt="our mission" />
                </div>
                <div className={classes.Content}>
                    <h2>Our <span>Mission</span></h2>
                    <p>Our mission is to provide safe shelter and access to immediate professional counselling services and support for women and children affected by gender-based violence.</p>
                    <p>We do that, by empowering victims with life skills and recovery programs and providing necessary resources in underprivileged areas and families.</p>
                </div>
            </div>
        </Container>
    )
}

export default Mission
