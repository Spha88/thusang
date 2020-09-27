import React from 'react';
import aboutImage from '../../assets/images/about-image.png';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import classes from './About.module.scss';
import Container from '../UI/Container/Container';

const About = () => {
    return (
        <Container>
            <section className={classes.About}>
                <div className={classes.Content}>
                    <Fade delay={500}><h2><span>About</span> Us</h2></Fade>
                    <Fade>
                        <p><span>Thusang Social Center</span> is non-profit organisation established to provide support services to individuals and families affected by gender-based violence and femicide.
                    We are based in Aliwal North, in the Eastern Cape province of South Africa.</p>
                    </Fade>
                </div>

                <div className={classes.Image}>
                    <Zoom delay={1000} fraction={0.9}>
                        <img src={aboutImage} alt="dipiction of violence" />
                    </Zoom>
                </div>

            </section>
        </Container>
    )
}

export default About
