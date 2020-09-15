import classes from './About.module.scss';
import React from 'react';
import Decal from '../../UI/Decal/Decal';
import Container from '../../UI/Container/Container';

const About = () => {
    return (
        <div className={classes.AboutUs}>
            <Decal heading="About Us" />

            <Container>
                <div className={classes.Content}>
                    <p><span>Thusang Social Center</span> is committed to reachout to the world on behalf of those without resources and means to do so.</p>

                    <p>We do so with deep confidence and belief that there is someone out there willing to extend a helping to women and children in distress, who are daily subjected to an abusive and sub-human behaviour of men who deserve no part in a humanitarian society. We rely on your kind-heartedness to make this reality a dream come true for the victims affected by GBV, rape and femicide.</p>

                    <h2>Our <span>Mission</span></h2>

                    <p>Our mission is to provide, safety shelter and access to immediate professional counselling services and support for women and children affected by gender-based violence.</p>

                    <p>We do that, by empowering victims with life skills and recovery programs and providing necessary resources in underprivileged areas and families.</p>

                    <h2>Our <span>Beliefs</span></h2>

                    <p>We believe in a world where every mother and child are safe.</p>
                </div>
            </Container>
        </div>
    )
}

export default About
