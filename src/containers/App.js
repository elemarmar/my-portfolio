import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Welcome from '../components/Welcome/Welcome';
import Home from '../components/Home/Home';
import Language from '../components/LanguagesBar/Language';

const App = (props) => {
  const [language, setLanguage] = useState('en');

  return (
    <div className="App">
      <Switch>
        <Route path="/" render={() => <Home lang={Language} />} />
      </Switch>
    </div>
  );
};

export default App;
