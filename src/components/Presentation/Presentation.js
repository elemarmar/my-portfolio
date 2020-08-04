import React, {useState, useEffect} from 'react';

import classes from './Presentation.module.css';
import LanguagesBar from '../LanguagesBar/LanguagesBar';
import Contact from '../Contact/Contact';
import Hello from '../Hello/Hello';
import messages from '../../api/myLanguages.json';
import PersonalDescription from '../PersonalDescription/PersonalDescription';


const Presentation = (props) => {
    const [activeMessage, setActiveMessage] = useState(messages.en);


    const changeActiveLanguage = (lang) => {
        console.log(messages[lang]);
        setActiveMessage(messages[lang]); 
    }

    return (
        <section className={classes.Presentation}>

            <div className={classes.BallTop}></div>
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