import React from 'react';
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
          <li>Created personalized material for each student</li>
          <li>
            Taught regularly to more than 50 students from different countries
          </li>
          <li>Improvised various strategies based on students' needs</li>
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
            In charge of giving guided tours in Spanish, French and English to
            individuals and schools
          </li>
          <li>
            Oversaw general museum maintenance (opening, closing and general
            preparations)
          </li>
          <li>
            Adapted to different audiences (children, adults, connoisseur, etc.)
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
