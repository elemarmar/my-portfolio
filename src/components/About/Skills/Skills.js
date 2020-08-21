import React, { useState } from 'react';
import classes from './Skills.module.scss';
import './../../Project/tags.css';

const Skills = (props) => {
  return (
    <div className={classes.Skills}>
      <h2>Skills</h2>
      <p>
        These are some of the <strong>technologies</strong> that I've used:
      </p>
      {/* Render this automatically from json */}
      <ul className={classes.Tags}>
        <li className='HTML-tag'>HTML</li>
        <li className='CSS-tag'>CSS</li>
        <li className='SASS-tag'>SASS</li>
        <li className='Bootstrap-tag'>Bootstrap</li>
        <li className='JS-tag'>JS</li>
        <li className='React-tag'>React</li>
        <li className='Node-tag'>Node</li>
        <li className='Other-tag'>Git</li>
        <li className='APIs-tag'>APIs</li>
        <li className='Other-tag'>Gulp</li>
        <li className='SQL-tag'>SQL</li>
        <li className='Jest-tag'>Jest</li>
        <li className='Enzyme-tag'>Enzyme</li>
      </ul>
      {/* Create component for each section */}
      <div className={classes.SkillsSection}>
        <h3 className={classes.center}>
          <strong>A patient problem solver </strong> with a stress shield
        </h3>
        <p className={classes.description}>
          I like{' '}
          <span className={classes.descriptionKey}>solving problems </span>and
          figuring out where the bug is. I do not get stressed and find
          enjoyment in
          <span className={classes.descriptionKey}> challenges</span>.
        </p>
      </div>
      <div className={classes.SkillsSection}>
        <h3 className={classes.center}>
          <strong>A creative mind </strong> with an eye for detail
        </h3>
        <p className={classes.description}>
          I create functional things that are appealing to the eye, creative and
          fun.
        </p>
      </div>
      <div className={classes.SkillsSection}>
        <h3 className={classes.center}>
          <strong>A reliable</strong> and <strong> helpful </strong> teammate
        </h3>
        <p className={classes.description}>
          I'm a dedicated and{' '}
          <span className={classes.descriptionKey}>empathic</span> teammate with
          practiced{' '}
          <span className={classes.descriptionKey}>leadership skills</span>.
        </p>
      </div>
      <div className={classes.SkillsSection}>
        <h3 className={classes.center}>
          <strong>An autonomous </strong> person who loves
          <strong> learning</strong>
        </h3>
        <p className={classes.description}>
          I work well on my own, am{' '}
          <span className={classes.descriptionKey}>
            always learning new things
          </span>{' '}
          and if there is something I don't know,{' '}
          <span className={classes.descriptionKey}>
            I know where to find the answer.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Skills;
