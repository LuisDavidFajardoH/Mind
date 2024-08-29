import React from "react";
import { Helmet } from "react-helmet";
import "./portafolio.css";
import { ArrowRight } from "akar-icons";

const Portafolio = () => {
  const redirectToProjects = () => {
    window.location.href = "/proyectos";
  };

  return (
    <>
      

      <div className="portafolio-container">
        <div className="proyectos">
          <h2>
            CON MÁS DE 30 AÑOS DE TRABAJO APOYANDO AL SECTOR INDUSTRIAL
            COLOMBIANO, SOMOS EXPERTOS EN EL DESARROLLO Y SOLUCIONES A BASE DEL
            METAL.
          </h2>
          <p>ALGUNOS DE NUESTROS PROYECTOS</p>
          <div className="imagenes-container">
            <img
              src={"images/6.1 MUEBLE PORTA HERRAMIENTAS.png"}
              alt="MUEBLE PORTA HERRAMIENTAS"
              className="proyecto-imagen"
            />
            <img
              src={"images/5.1 ESCALERA PLATAFORMA.png"}
              alt="ESCALERA PLATAFORMA"
              className="proyecto-imagen"
            />
            <img
              src={"images/3.2 ESCALERA TIPO GATO.png"}
              alt="ESCALERA TIPO GATO"
              className="proyecto-imagen"
            />
          </div>
          <div className="briefcase-button-center">
            <button onClick={redirectToProjects} className="briefcase-button">
              Ver Portafolio Completo&nbsp;
              <ArrowRight strokeWidth={2} size={17} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portafolio;
