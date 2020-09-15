import React from 'react';
import Container from '../UI/Container/Container';
import classes from './Help.module.scss';
import helping_img from '../../assets/images/helping_hand.png';
import { Link } from 'react-router-dom';

const Help = () => {
    return (
        <Container>
            <div className={classes.Help}>
                <div className={classes.Content}>
                    <h2>Raise Your helping Hand</h2>
                    <p>Help us create a safer environment for <span>woman</span> and <span>children</span></p>
                    <Link to="/donate">Donate Now</Link>
                </div>
                <div className={classes.Image}>
                    <img src={helping_img} alt="helping hand" />
                </div>
            </div>
        </Container>
    )
}

export default Help
