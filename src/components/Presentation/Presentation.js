import React, {useState, useEffect, useRef} from 'react';
import { useIntersection } from "react-use";
import gsap from "gsap";
import classes from './Presentation.module.css';
import LanguagesBar from '../LanguagesBar/LanguagesBar';
import Contact from '../Contact/Contact';
import Hello from '../Hello/Hello';
import messages from '../../api/myLanguages.json';
import PersonalDescription from '../PersonalDescription/PersonalDescription';
import ContactSocial from '../Contact/ContactSocial';




const Presentation = (props) => {
    const [activeMessage, setActiveMessage] = useState(messages.en);
    const ballRef = useRef(null);
    const intersection = useIntersection(ballRef, {
        root: null,
        rootMargin: "40px",
        threshold: 0.9
      });

    const expand = element => {
    gsap.to(element, 3, {
        opacity: 1,
        width: 9000,
        height: 9000,
        ease: "power4.out",
        stagger: {
            amount: 0.3
        }
        });
    };

    const shrink = element => {
        gsap.to(element, 1, {
          opacity: 0,
          width: 500,
          height: 500,
          ease: "power4.out"
        });
      };

      intersection && intersection.intersectionRatio < 0.3
      ? expand(".expand")
      : shrink(".expand");

    const changeActiveLanguage = (lang) => {
        console.log(messages[lang]);
        setActiveMessage(messages[lang]); 
    }

    return (
        <section className={classes.Presentation}>

            <div ref={ballRef} className={`${classes.BallTop} expand`}></div>
            <ContactSocial />
            <Hello title={activeMessage.title}/>
            <PersonalDescription activeMessage={activeMessage}/>
            <div className={classes.BallBottom}></div>

            <LanguagesBar 
                changeActiveLanguage={changeActiveLanguage}
                languages={messages}/>
            <Contact />
        </section>
        
        );
}

export default Presentation;