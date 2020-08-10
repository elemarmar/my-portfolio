import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Welcome from '../components/Welcome/Welcome';
import Home from '../components/Home/Home';

class App extends React.Component {

  render() {
    console.log('props', this.props);
    return (
      <div className="App">
        <Switch>
        <Route path="/education" render={() => <p>Hello</p>} />
          <Route 
            path="/" 
            exact
            component={Welcome} />
          <Route 
            path="/home"
            component={Home} />
            
        </Switch>

        
      </div>
    );
  }

}

export default App;
