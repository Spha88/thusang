import React from 'react';
import classes from './ContactUs.module.scss';
import Decal from '../../UI/Decal/Decal';
import ContactForm from '../../ContactUs/ContactForm/ContactForm';
import Container from '../../UI/Container/Container';

const ContactUs = () => {
    return (
        <div className={classes.Contact}>
            <Decal heading="Contact us" />
            <Container>
                <div className={classes.ContactForm} >
                    <h2>Send us an Email</h2>
                    <ContactForm />
                </div>
            </Container>
        </div>
    )
}

export default ContactUs
