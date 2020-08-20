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
              Maquetación: <strong>HTML5</strong>, <strong>CSS3</strong>,
              Flexbox, CSS Grid, <strong>SASS</strong>, Bootstrap
            </li>
            <li>
              <strong>JavaScript</strong> (ES6) y servicios web (
              <strong>APIs</strong>) de terceros
            </li>

            <li>
              Control de versiones con <strong>Git</strong>
            </li>
            <li>
              Creación de SPAs sencillas con <strong>React</strong>
            </li>
            <li>
              Manejo de Slack, Trello, Github, VSCode, Gulp, Terminal, Linter,
              Zeplin
            </li>
            <li>
              Experiencia en el desarrollo de proyectos usando filosofía Ágil y
              marco de trabajo Scrum
            </li>
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
            International Law, Universal History, Economy, European Law, EU
            Political System, IR theory, International Organizations.
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
            Focused on Asia Pacific politics, especifically China - South Korea
            - Japan relations and foreign policies, North - South Korean
            relations and EU relations with South Korea.
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
            Mainly focused on European Union politics, its communitary policies
            and cybersecurity strategy.
          </p>
        </div>
      </div>
      <div className={classes.MinorEducation}>
        <h4>Other education</h4>
        <ul>
          <li>
            I've taken courses in python, excel & LaTex (
            <abbr title='Universidad Complutense de Madrid'>UCM</abbr>)
          </li>
          <li>
            I have a certificate on business protocol in China, Korea and Japan
            (Casa Asia)
          </li>
          <li>
            I have completed numerous courses on the topic of international
            relations in Spain and abroad
          </li>
          <li>
            I'm <span className={classes.always}>ALWAYS</span> learning
            something new.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Education;
