import React from 'react';
import classes from './About.module.css';

const About = () => {

    return (
            <div className={classes.About}>
                <h2>About me</h2>
                <div className={classes.AboutBox}>
                    <span className={classes.AboutIcon}></span>
                    <p className={classes.Content}></p>
                </div>
            </div>
    );
}

export default About;