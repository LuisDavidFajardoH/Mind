import React from "react";
import './portafolio.css';
import { ArrowRight } from 'akar-icons';

const Portafolio = () => {
  return (
    <div className="portafolio-container">
      <div className="proyectos">
        <h2>CON MÁS DE 30 AÑOS DE TRABAJO APOYANDO AL SECTOR INDUSTRIAL COLOMBIANO, SOMOS EXPERTOS EN EL DESARROLLO Y SOLUCIONES A BASE DEL METAL.</h2>
        <p>ALGUNOS DE NUESTROS PROYECTOS</p>
        <div className="imagenes-container">
          <img src={'images/proyecto1.jpg'} alt="Proyecto 1" className="proyecto-imagen" />
          <img src={'images/proyecto2.jpg'} alt="Proyecto 2" className="proyecto-imagen" />
          <img src={'images/proyecto3.jpg'} alt="Proyecto 3" className="proyecto-imagen" />
          <img src={'images/proyecto4.jpg'} alt="Proyecto 4" className="proyecto-imagen" />
          <img src={'images/proyecto5.jpg'} alt="Proyecto 5" className="proyecto-imagen" />
          <img src={'images/proyecto6.jpg'} alt="Proyecto 6" className="proyecto-imagen" />
        </div>
        <div className="briefcase-button-center">
          <button className="briefcase-button">Ver Portafolio Completo&nbsp;<ArrowRight strokeWidth={2} size={17} /></button>
        </div>
      </div>
    </div>
  );
};

export default Portafolio;
