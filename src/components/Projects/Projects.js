import React, { useRef, useEffect, useState } from 'react';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import classes from './Projects.module.scss';
import Project from '../Project/Project';
import projects from '../../api/projects.json';

const Projects = (props) => {
  const textRef = useRef(null);

  const intersection = useIntersection(textRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.9,
  });

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
    });
  };
  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: 'power4.out',
    });
  };
  intersection && intersection.intersectionRatio > 0.9
    ? fadeIn('.fadeIn')
    : fadeOut('.fadeIn');

  const renderProjects = () => {
    return projects.map((project) => {
      return (
        <Project
          key={project.id}
          title={project.title}
          descriptions={project.descriptions}
          tags={project.tags}
          images={project.image}
          urls={project.url}
          id={project.id}
        />
      );
    });
  };

  return (
    <div className={classes.projects}>
      <div className={classes.BallBottom}></div>
      <div className={classes.ProjectsContainer}>
        <h2 className={`${classes.title} fadeIn`}>Projects</h2>
        <p className={`${classes.ProjectsDescription} fadeIn`} ref={textRef}>
          These are some of the small projects I have developed over the past
          few months. I'm currently working on a big and exciting
          language-learning web application.
        </p>
        <div className={classes.ProjectItems}> {renderProjects()}</div>
      </div>
    </div>
  );
};

export default Projects;
