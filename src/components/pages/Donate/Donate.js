
import React from 'react';
import classes from './Donate.module.scss';
import Decal from '../../UI/Decal/Decal';
import Container from '../../UI/Container/Container';
import thank_you_img from '../../../assets/images/thank_you.png';
import ContactForm from '../../ContactUs/ContactForm/ContactForm';

const Donate = () => {
    return (
        <div className={classes.Donate}>
            <Decal heading="Donate" color="red" />
            <Container>
                <div className={classes.Content}>
                    <div className={classes.BankingDetails}>
                        <h2><span>Donations</span> are welcome at:</h2>
                        <ul>
                            <li>Bank: First National Bank</li>
                            <li>Account Name: Thusang Social Center</li>
                            <li>Account No: <span>6285 7532 991</span></li>
                            <li>Account type: Cheque</li>
                            <li>Branch code: <span>250655</span> </li>
                        </ul>
                    </div>
                    <div className={classes.Image}>
                        <img src={thank_you_img} alt="thank graphic" />
                    </div>
                </div>
                <div className={classes.ContactForm}>
                    <h2>Contact us</h2>
                    <ContactForm />

                </div>
            </Container>
        </div>
    )
}

export default Donate
