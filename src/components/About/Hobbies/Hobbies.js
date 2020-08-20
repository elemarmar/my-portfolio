import React, { useState } from 'react';
import classes from './Hobbies.module.scss';
import Hobby from './Hobby/Hobby';
import data from '../../../api/hobbiesData.json';

const Hobbies = (props) => {
  const [currentHobby, setCurrentHobby] = useState('hi');

  const handleClick = (ev) => {
    console.log(ev.target.id);
  };

  return (
    <div className={classes.Education}>
      <h2>Hobbies</h2>
      <div className={classes.carousel}>
        <span id='prev' onClick={handleClick} className={classes.arrow}>
          HE
        </span>
        <Hobby data={data[0]} />
        <span id='next' onClick={handleClick} className={classes.arrow}>
          HE
        </span>
      </div>

      <div className={classes.EducationSection}>
        <h3 className={classes.center}>
          <strong>Origami </strong> master
        </h3>
        <p className={classes.description}>Blabla</p>
      </div>
      <div className={classes.EducationSection}>
        <h3 className={classes.center}>
          <strong>Hiker </strong> Super
        </h3>
        <p className={classes.description}>Blabla</p>
      </div>
      <div className={classes.EducationSection}>
        <h3 className={classes.center}>
          <strong>Language </strong> lover
        </h3>
        <p className={classes.description}>Blabla</p>
      </div>
      <div className={classes.EducationSection}>
        <h3 className={classes.center}>
          <strong>Movies and video editting </strong> Amateur
        </h3>
        <p className={classes.description}>Blabla</p>
      </div>
      <div className={classes.EducationSection}>
        <h3 className={classes.center}>
          <strong>Phone </strong> sketcher
        </h3>
        <p className={classes.description}>Blabla</p>
      </div>
    </div>
  );
};

export default Hobbies;
