import React from 'react';
import classes from './ContactUs.module.scss';
import Decal from '../../UI/Decal/Decal';
import ContactForm from '../../ContactUs/ContactForm/ContactForm';
import Container from '../../UI/Container/Container';
import Footer from '../../Footer/Footer';

const ContactUs = () => {
    return (
        <div className={`${classes.Contact} page`}>
            <Decal heading="Contact us" />
            <Container>
                <div className={classes.ContactForm} >
                    <h2>Send us an Email</h2>
                    <ContactForm />
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default ContactUs
