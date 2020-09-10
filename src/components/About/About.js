import React from 'react';
import aboutImage from '../../assets/images/about-image.png';
import classes from './About.module.scss';

const About = () => {
    return (
        <section className={classes.About}>
            <div className={classes.Content}>
                <h2><span>About</span> Us</h2>
                <p><span>Thusang Social Center</span> is non-profit organisation established to provide support services to individuals and families affected by gender-based violence and femicide.
 We are based in Aliwal North, in the Eastern Cape province of South Africa.</p>
            </div>
            <div className={classes.Image}>
                <img src={aboutImage} alt="dipiction of violence" />
            </div>
        </section>
    )
}

export default About
