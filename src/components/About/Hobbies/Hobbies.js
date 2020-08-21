import React, { useState } from 'react';
import classes from './Hobbies.module.scss';
import Carousel from '../../UI/Carousel/Carousel';
import Hobby from './Hobby/Hobby';
import data from '../../../api/hobbiesData.json';

const Hobbies = (props) => {
  return (
    <div className={classes.Hobbies}>
      <h2>Hobbies</h2>
      <Carousel />
    </div>
  );
};

export default Hobbies;
