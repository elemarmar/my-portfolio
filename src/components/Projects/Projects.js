import React, { useRef } from 'react';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import classes from './Projects.module.css';
import Proyect from '../Project/Project';
import proyects from '../../api/projects.json';

const Proyects = (props) => {
  const barRef = useRef(null);
  const experimentRef = useRef(null);

  const intersection = useIntersection(experimentRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  });

  const expandRight = (element) => {
    gsap.to(element, 3, {
      opacity: 1,
      width: 500,
      ease: 'power4.out',
      stagger: {
        amount: 0.3,
      },
    });
  };
  const shrinkLeft = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      width: 0,
      ease: 'power4.out',
    });
  };
  intersection && intersection.intersectionRatio < 0.3
    ? shrinkLeft('.expandRight')
    : expandRight('.expandRight');

  const renderProjects = () => {
    return proyects.map((proyect) => {
      return (
        <Proyect
          key={proyect.id}
          title={proyect.title}
          description={proyect.description}
          tags={proyect.tags}
          images={proyect.image}
          urls={proyect.url}
          id={proyect.id}
        />
      );
    });
  };

  return (
    <div className={classes.Proyects}>
      <div className={classes.BallBottom}></div>
      <div className={classes.ProjectsContainer}>
      <h2 className={classes.title}>Proyects</h2>
      <span ref={barRef} className={`${classes.Bar} expandRight`}></span>
      {renderProjects()}
      </div>
    </div>
  );
};

export default Proyects;
