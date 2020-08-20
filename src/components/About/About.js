import React from 'react';
import classes from './About.module.scss';
import { Link, Route, Switch } from 'react-router-dom';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import Hobbies from './Hobbies/Hobbies';
import Skills from './Skills/Skills';
import avatar from '../../assets/images/avatar.png';

const About = (props) => {
  return (
    <div className={classes.About}>
      <div className={classes.BallBottom}></div>
      <h2 className={classes.title}>About me</h2>
      <div className={classes.AboutBox}>
        <p className={classes.Content}>
          I'm a <strong>frontend developer</strong> from Madrid with a
          background in International Relations. I've lived in Spain, Austria,
          Germany and South Korea. I'm passionate about learning new languages
          and acquiring new skills. In my free time I do origami, hike, read
          science fiction and <strong>code</strong>.
        </p>
        <figure>
          <img className={classes.avatar} src={avatar} alt='Little Elena' />
          <figcaption>
            Little Elena before she became a Frontend developer
          </figcaption>
        </figure>
      </div>
      <Switch>
        <Route path='/about/education' render={Education} />
        <Route path='/about/experience' render={Experience} />
        <Route path='/about/hobbies' render={Hobbies} />
        <Route path='/about/skills' render={Skills} />
      </Switch>

      <ul className={classes.Menu}>
        <li>
          <Link to='/about/experience'>
            <button type='button'>experience</button>
          </Link>
        </li>
        <li>
          <Link to='/about/education'>
            <button type='button'>education</button>
          </Link>
        </li>
        <li>
          <Link to='/about/hobbies'>
            <button type='button'>hobbies</button>
          </Link>
        </li>
        <li>
          <Link to='/about/skills'>
            <button type='button'>skills</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default About;
