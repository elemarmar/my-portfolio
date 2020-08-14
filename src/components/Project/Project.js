import React, { useRef, useState } from 'react';
import { useIntersection } from 'react-use';
import classes from './Project.module.scss';
import gsap from 'gsap';
import Loader from '../Loader/Loader';
import './tags.css';

const Project = (props) => {
  const [imageMode, setImageMode] = useState('web');

  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  // Animation for fading in
  const fadeIn = (element) => {
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

  const handleClick = (ev) => {
    setImageMode(ev.target.id);
  };

  const style = {
    backgroundImage:
      'url(' +
      (imageMode === 'web' ? props.images.web : props.images.code) +
      ')',
  };

  const renderTags = () => {
    return props.tags.map((tag) => <li className={`${tag}-tag`}>{tag}</li>);
  };
  return (
    <div ref={sectionRef} className={`${classes.Project} fadeIn-${props.id} `}>
      <div className={classes.ProjectContainer}>
        <h3 className={`${classes.ProjectTitle} `}>{props.title}</h3>
        <div>
          <a
            className={classes.Link}
            href={props.urls[imageMode]}
            target='_blank'
          >
            <div className={`${classes.ProjectCard}`}>
              <div style={style} className={classes.websitePic}></div>
              <span class={classes.websitePicText}>
                Visit {imageMode === 'web' ? 'website' : 'repository'} {'>>'}
              </span>
            </div>
          </a>
          <div className={classes.ProjectMode}>
            <span
              className={imageMode === 'web' ? classes.active : null}
              onClick={handleClick}
              id='web'
            ></span>

            <span
              className={imageMode === 'code' ? classes.active : null}
              onClick={handleClick}
              id='code'
            ></span>
          </div>
        </div>

        <div className={`${classes.ProjectDescription}`}>
          {imageMode === 'web'
            ? props.descriptions.user
            : props.descriptions.tech}
          <ul className={classes.Tags}>{renderTags()}</ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
