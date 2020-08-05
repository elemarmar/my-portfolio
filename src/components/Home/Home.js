import React from 'react';
import Presentation from '../Presentation/Presentation';
import Proyects from  '../Proyects/Proyects';
import Skills from '../Skills/Skills';
import Random from '../Random/Random';
import NavBar from '../NavBar/NavBar';
import About from '../About/About'


const Home = (props) => {

    return (
        <div>
            <Presentation />
            <NavBar />
            {/* <Skills /> */}
            <Proyects />
            <About />
        </div>
        
        );
}

export default Home;