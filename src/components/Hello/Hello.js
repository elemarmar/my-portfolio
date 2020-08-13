import React from 'react';
import ReactCSSTransitionGroup from 'react-transition-group';
import './Hello.css';

const Hello = (props) => {
  const renderHello = () => {
    const helloArray = props.title.split('');
    const stagger = 100;
    return helloArray.map((c, i) => {
      const style = {
        animationDelay: i * stagger + 'ms',
      };
      return (
        <span style={style} className="letter in">
          {c}
        </span>
      );
    });
  };

  return (
    <h1 className={'presentation-title'}>
      <div>{renderHello()}</div>
    </h1>
  );
};

export default Hello;
