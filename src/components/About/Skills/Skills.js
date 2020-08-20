import React, { useState } from 'react';
import classes from './Skills.module.scss';

const Skills = (props) => {
  return (
    <div className={classes.Education}>
      <h2>Skills</h2>
      <p>Brief description of my skills</p>
      <div className={classes.EducationSection}>
        <h3 className={classes.center}>
          <strong>A patient problem solver </strong> with stress shield
        </h3>
        <p className={classes.description}>origami, sudoku, bugs</p>
      </div>
      <div className={classes.EducationSection}>
        <h3 className={classes.center}>
          <strong>A creative mind </strong> with an eye for detail
        </h3>
        <p className={classes.description}>
          try to make things appealing, make things work properly
        </p>
      </div>
      <div className={classes.EducationSection}>
        <h3 className={classes.center}>
          <strong>A very good and helpful </strong> teammate
        </h3>
        <p className={classes.description}>
          good leader, share knowledge, pull team, experience in 3 different
          groups
        </p>
      </div>
      <div className={classes.EducationSection}>
        <h3 className={classes.center}>
          <strong>A very responsible and dedicated</strong> worker
        </h3>
        <p className={classes.description}>
          I like to create a good atmosphere in environment. I'm very
          responsible and I'm a bit of a perfectionist, I like to... exp. extra
          features group projects, accepted challenge of 4 tours in a row on
          saturdays, established a timetable for classes dring university{' '}
        </p>
      </div>
      <div className={classes.EducationSection}>
        <h3 className={classes.center}>
          <strong>An autonomous </strong> person who loves{' '}
          <strong>learning</strong> new things
        </h3>
        <p className={classes.description}>
          all languages, backend things during course. Origami, piano, guitar,
          saxo
        </p>
      </div>
    </div>
  );
};

export default Skills;
