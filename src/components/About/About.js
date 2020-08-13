import React from 'react';
import classes from './About.module.css';
import { Link, Route, Switch } from 'react-router-dom';
import AboutText from './AboutText';
import Home from '../Home/Home';

const About = (props) => {
  return (
    <div className={classes.About}>
      <div className={classes.BallBottom}></div>
      <h2 className={classes.title}>About me</h2>
      <div className={classes.AboutBox}>
        <span className={classes.AboutIcon}></span>
        <p className={classes.Content}>
          I'm a frontend developer from Madrid with a background in
          International Relations. I've lived and studied in Spain, Austria,
          Germany and South Korea.
        </p>
      </div>
      <Switch>
        <Route path="/education" render={() => <p>Hello</p>} />
        {/* <Route exact path="/education" component={AboutText} /> */}
      </Switch>

      <ul className={classes.Menu}>
        <li>
          <Link to="/experience">
            <button type="button">experience</button>
          </Link>
        </li>
        <li>
          <Link to="/education">
            <button type="button">education</button>
          </Link>
        </li>
        <li>
          <Link to="/hobbies">
            <button type="button">hobbies</button>
          </Link>
        </li>
        <li>
          <Link to="/strengths">
            <button type="button">strengths</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default About;
