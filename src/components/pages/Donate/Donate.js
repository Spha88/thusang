
import React from 'react';
import classes from './Donate.module.scss';
import Decal from '../../UI/Decal/Decal';
import Container from '../../UI/Container/Container';
import thank_you_img from '../../../assets/images/thank_you.png';
import Footer from '../../Footer/Footer';

const Donate = () => {
    return (
        <div className={`${classes.Donate} page`}>
            <Decal heading="Donate" color="#A30000" />
            <Container>
                <div className={classes.Content}>
                    <div className={classes.BankingDetails}>
                        <h2><span>Donations</span> are welcome at:</h2>
                        <ul>
                            <li><span>Bank</span>: First National Bank</li>
                            <li><span>Account Name</span>: Thusang Social Center</li>
                            <li><span>Account No</span>: <span className={classes.Numbers}>6285 7532 991</span></li>
                            <li><span>Account type</span>: Cheque</li>
                            <li><span>Branch code</span>: <span className={classes.Numbers}>250655</span> </li>
                        </ul>
                        <h3>"No amount is too little"</h3>
                    </div>
                    <div className={classes.Image}>
                        <img src={thank_you_img} alt="thank graphic" />
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default Donate
