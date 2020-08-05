import React, { useRef } from 'react';
import { useIntersection } from "react-use";
import classes from './Proyect.module.css';
import gsap from "gsap";





const Proyect = (props) => {

    const sectionRef = useRef(null);
    

    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    });

    // Animation for fading in
    const fadeIn = element => {
        gsap.to(element, 1, {
        opacity: 1,
        y: -60,
        ease: "power4.out",
        stagger: {
            amount: 2.3
        }
        });
    };
    // Animation for fading out
    const fadeOut = element => {
        gsap.to(element, 1, {
        opacity: 0,
        y: -20,
        ease: "power4.out"
        });
    };

    // checking to see when the viewport is visible to the user
    intersection && intersection.intersectionRatio < 0.5
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");

    console.log(props.ref);
    return (
        <div ref={sectionRef} className={`${classes.Proyect}`}>
            <h3 className={`${classes.ProyectTitle} fadeIn`}>{props.title}</h3>
            <div className={`${classes.ProyectCard} fadeIn`}></div>
            <div className={`${classes.ProyectDescription} fadeIn`}>{props.description}</div>
        </div>
        
        );
}

export default Proyect;