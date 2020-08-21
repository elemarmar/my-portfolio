import React, { useState } from 'react';
import Hobby from '../../About/Hobbies/Hobby/Hobby';
import data from '../../../api/hobbiesData.json';
import classes from './Carousel.module.scss';

const Carousel = () => {
  const [currentHobby, setCurrentHobby] = useState(0);

  const handleClick = (ev) => {
    console.log(ev.currentTarget.id);
    if (ev.currentTarget.id === 'next') {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  const nextSlide = () => {
    if (currentHobby === data.length - 1) {
      setCurrentHobby(0);
    } else {
      setCurrentHobby(currentHobby + 1);
    }
    console.log(currentHobby);
    console.log(data.length - 1);
  };
  const prevSlide = () => {
    if (currentHobby === 0) {
      setCurrentHobby(data.length - 1);
    } else {
      setCurrentHobby(currentHobby - 1);
    }
    console.log(currentHobby);
    console.log(data.length - 1);
  };

  return (
    <div className={classes.carousel}>
      <span id='prev' onClick={handleClick} className={classes.arrow}>
        <i class='fas fa-angle-left'></i>
      </span>
      <Hobby data={data[currentHobby]} />
      <span id='next' onClick={handleClick} className={classes.arrow}>
        <i class='fas fa-angle-right'></i>
      </span>
    </div>
  );
};

export default Carousel;
