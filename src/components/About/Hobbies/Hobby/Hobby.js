import React from 'react';
import classes from './Hobby.module.scss';

const Hobby = (props) => {
  const renderSkills = () => {
    return props.data.skills.map((skill) => {
      return (
        <li>
          {skill.name}
          <span className={classes.HobbySkillsMeasure}>
            {addPoints(skill.points)}
          </span>
        </li>
      );
    });
  };

  const addPoints = (n) => {
    const fullPoints = [];
    for (let i = 0; i < n; i++) {
      fullPoints.push(<i class='fas fa-circle'></i>);
    }
    while (fullPoints.length < 4) {
      fullPoints.push(<i class='far fa-circle'></i>);
    }

    return fullPoints;
  };
  return (
    <div className={`${classes.HobbyCard} ${classes[props.data.class]}`}>
      <div className={classes.FlipContainer}>
        <div className={classes.Flipper}>
          <div className={classes.Front}>
            <h3>{props.data.name}</h3>
            <span className={classes.HobbyImage}></span>
            <ul className={classes.HobbySkills}>{renderSkills()}</ul>
          </div>
          <div className={classes.Back}>
            <h3>{props.data.name}</h3>
            <p className={classes.HobbyDescription}>{props.data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobby;
