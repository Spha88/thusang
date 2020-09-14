import React from 'react';
import Container from '../UI/Container/Container';
import classes from './HowToHelp.module.scss';

const HowToHelp = () => {
    return (
        <Container>
            <div className={classes.HowToHelp}>
                <h2 className={classes.Heading}>How you can help?</h2>
                <div className={classes.Content}>
                    <div className={classes.Paragraph}>
                        <h2>Send a <span>donation</span></h2>
                        <p>Giving online has never been more secure, convenient or hassle-free with our one-click donation. We also do accept standard cash and check donations at all of our locations</p>
                    </div>
                    <div className={classes.Paragraph}>
                        <h2>Become a <span>member</span></h2>
                        <p>You can get involved today by becoming a Volunteer. Sign up and you will be joining a group of change-makers, a network strong enough to impact positive change in the lives of women and children.</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default HowToHelp
