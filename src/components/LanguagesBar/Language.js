import React from 'react';
import classes from './LanguagesBar.module.css';
import es from '../../assets/images/esIcon.svg';
import de from '../../assets/images/deIcon.svg';
import fr from '../../assets/images/frIcon.svg';
import en from '../../assets/images/enIcon.png';
import random from '../../assets/images/randomIcon.png';

const Language = (props) => {
    const handleClick = (ev) => {
        props.changeActiveLanguage(props.langId);
    }

    const langIcons = {
        "es": es,
        "de": de,
        "fr": fr,
        "en": en,
        "random": random
    };

    return(

        <div className={classes.Language} onClick={handleClick}>
            <img 
                className={classes.LanguageFlag} 
                src={langIcons[props.langId]} alt={`${props.langId} icon`}/>
        </div>

    );
}

export default Language;