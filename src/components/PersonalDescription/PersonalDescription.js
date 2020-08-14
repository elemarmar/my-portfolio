import React from 'react';
import TextLoop from 'react-text-loop';
import classes from './PersonalDescription.module.scss';

const PersonalDescription = (props) => {
  return (
    <div className={classes.PresentationText}>
      <span className={classes.PresentationName}>
        {props.activeMessage.name}
      </span>
      <span className={classes.Hello}></span>,
      <span className={classes.PersonalDescription}>
        {props.activeMessage.description}
      </span>
      <span className={classes.Text}>
        <TextLoop
          className={classes.LoopText}
          children={props.activeMessage.extraInfo}
          springConfig={{ stiffness: 180, damping: 10 }}
          interval={4000}
        />
      </span>
    </div>
  );
};

export default PersonalDescription;
