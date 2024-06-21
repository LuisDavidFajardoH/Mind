import React from "react";
import './portafolio.css';
import {Briefcase} from 'akar-icons';

const Portafolio = () => {
    return (
        
        <div className="proyectos">
            <h2>CON MÁS DE 30 AÑOS DE TRABAJO APOYANDO AL SECTOR INDUSTRIAL COLOMBIANO, SOMOS EXPERTOS EN EL DESARROLLO Y SOLUCIONES A BASE DEL METAL.</h2>
            <p>ALGUNOS DE NUESTROS PROYECTOS.</p>
            <div className="briefcase-button-center"><button className="briefcase-button"> <Briefcase strokeWidth={2} size={18} />&nbsp;Ver Portafolio</button></div>
        </div>


    );
};

export default Portafolio;