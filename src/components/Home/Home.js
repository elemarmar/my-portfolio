import React from 'react';
import Presentation from '../Presentation/Presentation';
import Projects from '../Projects/Projects';
import NavBar from '../NavBar/NavBar';
import About from '../About/About';
import { Route, Link, Switch } from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
      <Presentation />
      <NavBar />
      <Switch>
        <Route path='/projects' component={Projects} />
        <Route path='/about' component={About} />
      </Switch>
    </div>
  );
};

export default Home;
