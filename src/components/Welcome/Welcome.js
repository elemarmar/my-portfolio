import React from 'react';
import { Link } from 'react-router-dom';

import arrow from '../../assets/images/arrow.svg';
import classes from './Welcome.module.css';
import hints from '../../api/formulaHints.json';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hints: hints.hints,
      displayedHint: '',
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler = () => {
    const hint = this.state.hints[
      Math.floor(Math.random() * this.state.hints.length)
    ];
    this.setState({
      displayedHint: hint,
    });
  };

  render() {
    return (
      <div className={classes.WelcomeCard}>
        <p>Do you know the formula...?</p>
        <h3>
          Em<sup>2</sup>=<span>{this.state.displayedHint}</span>
        </h3>
        <button type="button" onClick={this.onClickHandler}>
          Show hint
        </button>
        <Link to="/home">
          <img className={classes.arrow} src={arrow} alt="arrow" />
        </Link>
      </div>
    );
  }
}

export default Welcome;
