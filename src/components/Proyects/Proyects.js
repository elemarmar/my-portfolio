import React from 'react';
import classes from './Proyects.module.css';
import Proyect from '../Proyect/Proyect';




const Proyects = (props) => {

    return (
        <div className={classes.Proyects}>
            <h2 className={classes.title}>Proyects</h2>
            <Proyect />
        </div>
        
        );
}

export default Proyects;