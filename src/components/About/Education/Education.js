import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import classes from './Education.module.scss';

const Education = (props) => {
  return (
    <>
      <div className={classes.Education}>
        <h2>Education</h2>
        <div className={classes.EducationSection}>
          <span className={classes.date}>2020</span>
          <h3 className={classes.center}>
            <strong>Adalab/ </strong>Intensive course in front end development
          </h3>
          <span className={classes.location}>
            <i class='fas fa-map-marker-alt'></i> Madrid (Spain)
          </span>
          <ul className={classes.description}>
            <li>
              <strong>HTML5</strong>, <strong>CSS3</strong>, Flexbox, CSS Grid,{' '}
              <strong>SASS</strong>, Bootstrap
            </li>
            <li>
              <strong>JavaScript</strong> (ES6) & <strong>APIs</strong>
            </li>
            <li>
              Version control with <strong>Git</strong>
            </li>
            <li>
              Creating simple SPAs with <strong>React</strong>
            </li>
            <li>
              Slack, Trello, Github, VSCode, Gulp, Terminal, Linter, Zeplin
            </li>
            <li>Experience in project development using Agile and Scrum</li>
          </ul>
        </div>
        <div className={classes.EducationSection}>
          <span className={classes.date}>2019</span>
          <h3 className={classes.center}>
            <strong>UCM/ </strong>International Relations B.A
          </h3>
          <span className={classes.location}>
            <i class='fas fa-map-marker-alt'></i> Universidad Complutense de
            Madrid (Spain)
          </span>
          <p className={classes.description}>
            International law, universal history, economy, European law, EU
            political system and international organizations
          </p>
        </div>

        <div className={classes.EducationSection}>
          <span className={classes.date}>2018</span>
          <h3 className={classes.center}>
            <strong>HUFS/ </strong> Exchange Scholarship at Hankuk University of
            Foreign Studies
          </h3>

          <span className={classes.location}>
            <i class='fas fa-map-marker-alt'></i> Seoul (South Korea)
          </span>
          <p className={classes.description}>
            Asia Pacific politics (China, South Korea and Japan) and North Korea
            - South Korea relations
          </p>
        </div>
        <div className={classes.EducationSection}>
          <span className={classes.date}>2017</span>
          <h3 className={classes.center}>
            <strong>UW/ </strong>Erasmus in Universität Wien
          </h3>

          <span className={classes.location}>
            <i class='fas fa-map-marker-alt'></i> Universität Wien, Vienna
            (Austria)
          </span>
          <p className={classes.description}>
            European Union politics, communitary policies and cybersecurity
            strategy
          </p>
        </div>
      </div>
      <div className={classes.MinorEducation}>
        <h4>Other education</h4>
        <ul>
          <li>
            Courses in Python, Excel & LaTex (
            <abbr title='Universidad Complutense de Madrid'>UCM</abbr>)
          </li>
          <li>
            Certificate on business protocol in China, Korea and Japan (Casa
            Asia)
          </li>
          <li>
            Numerous courses on the topic of international relations in Spain
            and abroad
          </li>
          <li>
            <span className={classes.always}>ALWAYS</span> looking to learn
            something new
          </li>
        </ul>
      </div>
    </>
  );
};

export default Education;
