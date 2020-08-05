import React from 'react';
import classes from './Contact.module.css';





const ContactSocial = (props) => {

    return (
        <ul className={classes.ContactSocial}>
            <li>
                <a href="https://www.linkedin.com/in/elenamartinezmarin/" target="_blank" className={classes.Linkedin}></a>
            </li>
            <li>
                <a href="https://github.com/elemarmar" target="_blank" className={classes.Github}></a>
            </li>

        </ul>
        
        );
}

export default ContactSocial;