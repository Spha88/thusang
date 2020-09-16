import React from 'react'
import classes from './Modal.module.scss';

const Modal = ({ open, close }) => {
    return (
        <div className={`${classes.Modal} ${!open && classes.close}`} onClick={close} >
            <div>
                <h2>Your message was sent</h2>
                <p>Thank you.</p>
            </div>
        </div>
    )
}

export default Modal
