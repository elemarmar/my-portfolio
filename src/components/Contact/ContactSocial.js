import React from 'react';
import classes from './Contact.module.css';





const ContactSocial = (props) => {

    return (
        <ul className={classes.ContactSocial}>
            <li>
                <span className={classes.Linkedin}></span>
            </li>
            <li>
                <span className={classes.Github}></span>
            </li>

        </ul>
        
        );
}

export default ContactSocial;