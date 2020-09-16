import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import validator from 'validator';
import axios from 'axios';

import classes from './ContactForm.module.scss';

import Modal from '../../UI/Modal/Modal';


const ContactForm = () => {
    const [openModal, setOpenModal] = useState(false);
    const { register, handleSubmit, errors, trigger } = useForm();

    const close = () => setOpenModal(false);

    const onSubmit = data => {
        console.log(data);
        axios({
            method: 'post',
            url: 'form_handler.php',
            headers: { 'Content-type': 'application/json' },
            data: {
                name: data.fullname,
                number: data.number,
                email: data.email,
                subject: 'Email enquiry from the website',
                message: data.message
            }
        })
            .then(res => {
                document.getElementById('contact-form').reset();
                console.log(res);

            })
            .catch(error => {
                console.log(error);
            })

        setOpenModal(true);
    };

    return (
        <form
            id="contact-form"
            className={classes.Form}
            onSubmit={handleSubmit(onSubmit)}>

            {/** Name */}
            <div className={classes.FormGroup}>
                <label htmlFor="fullName">Name</label>
                <div className={`${classes.InputContainer} ${errors.fullName && classes.InputContainerError}`}>
                    <i className="material-icons">account_circle</i>
                    <input name="fullName" type="text" placeholder="Enter your name..."
                        ref={register({
                            required: { value: true, message: 'Name is required.' },
                            minLength: { value: 2, message: 'Name too short.' },
                            maxLength: { value: 60, message: 'Your name is too long.' },
                            validate: value => validator.isAlpha(value.replace(/\s/g, '')) || 'Invalid characters, only alphabets allowed',
                        })} />
                </div>
                <span className={classes.Error}> {errors?.fullName?.message}</span>
            </div>

            {/** Email */}
            <div className={classes.FormGroup}>
                <label htmlFor="email">E-mail</label>
                <div className={`${classes.InputContainer} ${errors.email ? classes.InputContainerError : ''}`}>
                    <i className="material-icons">email</i>
                    <input name="email" type="text" placeholder="Enter your email..."
                        ref={register({
                            required: { value: true, message: 'Email is required' },
                            validate: email => validator.isEmail(email) || 'Invalid E-mail'
                        })} />
                </div>
                <span className={classes.Error}> {errors?.email?.message} </span>
            </div>

            {/** Phone number */}
            <div className={classes.FormGroup}>
                <label htmlFor="phone">Phone</label>
                <div className={`${classes.InputContainer} ${errors.phone && classes.InputContainerError}`}>
                    <i className="material-icons">phone</i>
                    <input name="phone" type="phone" placeholder="Enter your number..."
                        onBlur={() => { trigger('phone') }}
                        ref={register({
                            required: { value: true, message: 'Number is required.' },
                            minLength: { value: 10, message: 'Contact number too short.' },
                            maxLength: { value: 13, message: 'Your number is too long.' },
                            validate: phone => validator.isMobilePhone(phone, 'en-ZA') || 'Enter a valid contact number'
                        })} />
                </div>
                <span className={classes.Error}> {errors?.phone?.message} </span>
            </div>

            {/** Message */}
            <div className={classes.FormGroup}>
                <label htmlFor="message" className={classes.MsgLabel}>Enter your message</label>
                <div className={`${classes.InputContainer} ${errors.message && classes.InputContainerError}`}>
                    <i className={`material-icons ${classes.inTextArea}`}>message</i>
                    <textarea name="message" cols="30" rows="5"
                        ref={register({
                            required: { value: true, message: 'Message is required.' },
                            minLength: { value: 2, message: 'Message too short.' },
                            maxLength: { value: 1000, message: 'Your name is too long.' },
                        })}></textarea>
                </div>
                <span className={classes.Error}> {errors?.message?.message} </span>
            </div>

            <footer>
                <button>Send</button>
            </footer>
            <Modal open={openModal} close={close} />
        </form >
    )
}
export default ContactForm;
