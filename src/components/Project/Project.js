import React, { useRef } from 'react';
import { useIntersection } from 'react-use';
import classes from './Project.module.css';
import gsap from 'gsap';

const Proyect = (props) => {
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  // Animation for fading in
  const fadeIn = (element) => {
    console.log('fadeIn');
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: 'power4.out',
      stagger: {
        amount: 2.3,
      },
    });
  };
  // Animation for fading out
  const fadeOut = (element) => {
    console.log('fadeOut');
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: 'power4.out',
    });
  };

  // checking to see when the viewport is visible to the user
  intersection && intersection.intersectionRatio < 0.5
    ? fadeOut('.fadeIn-' + props.id)
    : fadeIn('.fadeIn-' + props.id);

  return (
    <div ref={sectionRef} className={`${classes.Proyect} fadeIn-${props.id} `}>
      <h3 className={`${classes.ProyectTitle} `}>{props.title}</h3>
      <div className={`${classes.ProyectCard}`}></div>
      <div className={`${classes.ProyectDescription}`}>{props.description}</div>
      <ul className={classes.Tags}>
        <li>Tag 1</li>
        <li>Tag 2</li>
        <li>Tag 3</li>
      </ul>
    </div>
  );
};

export default Proyect;
