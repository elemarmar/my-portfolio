import React from 'react';
import classes from './Contact.module.scss';
import cv from '../../assets/downloads/elena-martinez-marin-cv.pdf';

const Contact = (props) => {
  return (
    <ul className={classes.Contact}>
      <li>
        <a
          href='mailto:elemartinezmarin@gmail.com'
          className={classes.Email}
        ></a>
      </li>
      <li>
        <a href='tel:676353253' className={classes.Phone}></a>
      </li>
      <li>
        <a href={cv} download>
          <span className={classes.Cv}></span>
        </a>
      </li>
    </ul>
  );
};

export default Contact;
