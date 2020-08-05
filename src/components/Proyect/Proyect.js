import React from 'react';
import classes from './Proyect.module.css';





const Proyect = (props) => {


    return (
        <div className={classes.Proyect}>
            <h3 className={classes.ProyectTitle}>{props.title}</h3>
            <div className={classes.ProyectCard}>Proyects</div>
            <div className={classes.ProyectDescription}>{props.description}</div>
        </div>
        
        );
}

export default Proyect;