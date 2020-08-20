import React, { useState } from 'react';
import classes from './Experience.module.scss';

const Experience = (props) => {
  return (
    <div className={classes.Experience}>
      <h2>Experience</h2>
      <div className={classes.ExperienceSection}>
        <span className={classes.date}>2018-2019</span>
        <h3 className={classes.center}>
          <strong>Independent/ </strong>Online language tutor
        </h3>
        <span className={classes.location}>
          <i class='fas fa-map-marker-alt'></i> Madrid (Spain)
        </span>
        <ul className={classes.description}>
          <li>I created personalized material for each student.</li>
          <li>
            Taught regularly to more than 50 students from different countries.
          </li>
          <li>
            I had to improvise different ways of explaining the same topic.
          </li>
        </ul>
        <ul className={classes.descriptionTags}>
          <li>improvisation</li>
          <li>creativity</li>
          <li>responsibility</li>
          <li>communication</li>
          <li>organization</li>
        </ul>
      </div>
      <div className={classes.ExperienceSection}>
        <span className={classes.date}>2016-2017</span>
        <h3 className={classes.center}>
          <strong>Jugetrónica/ </strong>Guide of Robot Museum in English, French
          and Spanish
        </h3>
        <span className={classes.location}>
          <i class='fas fa-map-marker-alt'></i> Juguetrónica S.A., Madrid
          (Spain)
        </span>
        <ul className={classes.description}>
          <li>
            I was in charge of giving guided tours in Spanish, French and
            English to individuals and schools.
          </li>
          <li>
            I had to maintain the museum, prepare it for tours and in charge of
            its closure and the good state of all robots.
          </li>
          <li>
            I modulated my speech according to the audience and their expertise
            on robotics.
          </li>
          <li>
            {' '}
            For some time, I was the only person in charge of the guided tours.
          </li>
        </ul>
        <ul className={classes.descriptionTags}>
          <li>responsibility</li>
          <li>patience</li>
          <li>communication</li>
          <li>management</li>
          <li>autonomy</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
