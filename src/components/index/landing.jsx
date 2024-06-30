// landing prueba
import React from 'react';
import Navbar from '../navbar/navbar';
import Header from './header/header';
import Descripcion from './descripcion/descripcion';
import Informacion from './menuEmpresa/menuEmpresa';
import Portafolio from './portafolio/portafolio';
import BotonWhatsapp from './boton-whatsapp/boton-whatsapp';
import Footer from './footer/footer';

const Landing = () => {
    return (
        <>
        <Navbar />
        <Header />
        <Descripcion />
        <Informacion />
        <Portafolio />
        <BotonWhatsapp />
        <Footer />
        </>
    );
    }

export default Landing;