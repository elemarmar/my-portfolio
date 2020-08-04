import React from 'react';
import Language from './Language';
import classes from './LanguagesBar.module.css';



const LanguagesBar = (props) => {
    const languages = Object.keys(props.languages);
    console.log(languages);
    
    const renderLanguages = () => {
        return languages.map(lang => <Language key={lang} langId={lang} changeActiveLanguage={props.changeActiveLanguage}/>);
    }

    return (
        <div className={classes.LanguagesBar}>
            {renderLanguages()}
        </div>);
}

export default LanguagesBar;