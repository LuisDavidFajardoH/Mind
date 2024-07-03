// landing prueba
import React from 'react';
import Navbar from '../navbar/navbar';
import Header from './header/header';
import Descripcion from './descripcion/descripcion';
import Informacion from './menuEmpresa/menuEmpresa';
import Portafolio from './portafolio/portafolio';
import BotonWhatsapp from './boton-whatsapp/boton-whatsapp';
import Separator from '../separador/divider.jsx';
import Footer from './footer/footer';

const Landing = () => {
    return (
        <>
        <Navbar />
        <Header />  
        <Descripcion />
        <Separator />
        <Informacion />
        <Separator />
        <Portafolio />
        <BotonWhatsapp />
        <Footer />
        
        </>
    );
    }

export default Landing;