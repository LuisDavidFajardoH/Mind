// landing prueba
import React from 'react';
import Navbar from '../navbar/navbar';
import Header from './header/header';
import Descripcion from './descripcion/descripcion';
import Portafolio from './portafolio/portafolio';

const Landing = () => {
    return (
        <>
        <Navbar />
        <Header />
        <Descripcion />
        <Portafolio />
        </>
    );
    }

export default Landing;