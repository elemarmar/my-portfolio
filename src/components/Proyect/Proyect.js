import React from 'react';
import classes from './Proyect.module.css';




const Proyect = (props) => {

    return (
        <div className={classes.Proyect}>
            <div className={classes.ProyectCard}>Proyects</div>
            <div className={classes.ProyectDescription}>Description</div>
        </div>
        
        );
}

export default Proyect;