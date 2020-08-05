import React from 'react';
import classes from './Proyects.module.css';
import Proyect from '../Proyect/Proyect';
import proyects from '../../api/projects.json';



const Proyects = (props) => {
    const renderProjects = () => {
        return proyects.map(proyect => {
        return <Proyect 
            key={proyect.id}
            title={proyect.title} 
            description={proyect.description}
            tags={proyect.tags}
            images={proyect.image}
            urls={proyect.url}
            />
        });
    }

    return (
        <div className={classes.Proyects}>
            <h2 className={classes.title}>Proyects</h2>
            {renderProjects()}
        </div>
        
        );
}

export default Proyects;