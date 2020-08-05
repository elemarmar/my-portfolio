import React from 'react';
import classes from './Contact.module.css';





const Contact = (props) => {

    return (
        <ul className={classes.Contact}>
            <li>
                <a href="mailto:elemartinezmarin@gmail.com" className={classes.Email}></a>
            </li>
            <li>
                <a href="tel:676353253" className={classes.Phone}></a>
            </li>
            <li>
                <span className={classes.Cv}></span>
            </li>
        </ul>
        
        );
}

export default Contact;