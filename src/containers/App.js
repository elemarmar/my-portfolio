import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from '../components/Home/Home';
import Language from '../components/LanguagesBar/Language';
import Footer from '../components/Footer/Footer';
const App = (props) => {
  const [language, setLanguage] = useState('en');

  return (
    <div className='App'>
      <Switch>
        <Route path='/' render={() => <Home lang={Language} />} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
