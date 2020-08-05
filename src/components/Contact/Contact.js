import React from 'react';
import classes from './Contact.module.css';





const Contact = (props) => {

    return (
        <ul className={classes.Contact}>
            <li>
                <span className={classes.Email}></span>
            </li>
            <li>
                <span className={classes.Phone}></span>
            </li>
            <li>
                <span className={classes.Cv}></span>
            </li>
        </ul>
        
        );
}

export default Contact;