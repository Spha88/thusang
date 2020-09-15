import React from 'react';
import classes from './ContactForm.module.scss';

const ContactForm = () => {
    return (
        <div className={classes.ContactForm}>
            <form action="">
                <div className={classes.FormGroup}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                    <p className={classes.ErrorMsg}></p>
                </div>
                <div className={classes.FormGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" />
                    <p className={classes.ErrorMsg}></p>
                </div>
                <div className={classes.FormGroup}>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" name="phone" />
                    <p className={classes.ErrorMsg}></p>
                </div>
                <div className={classes.FormGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" cols="30" rows="10" ></textarea>
                    <p className={classes.ErrorMsg}></p>
                </div>
                <button className={classes.SendBtn}>Send</button>
            </form>
        </div>
    )
}

export default ContactForm
