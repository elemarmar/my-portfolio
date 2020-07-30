import React from 'react';
import Presentation from '../Presentation/Presentation';
import Proyects from  '../Proyects/Proyects';
import Skills from '../Skills/Skills';
import Random from '../Random/Random';


const Home = (props) => {

    return (
        <div>
            <Presentation />
            <Skills />
            <Proyects />
            <Random />
        </div>
        
        );
}

export default Home;