import React from 'react';
import classes from './Contact.module.css';




const Contact = (props) => {

    return (
        <ul className={classes.Contact}>
            <li className={classes.Email}>email</li>
            <li>phone</li>
            <li>CV</li>
        </ul>
        
        );
}

export default Contact;