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
      <Helmet>
        <title>Portafolio - Proyectos y Soluciones de Metal | Mind</title>
        <meta
          name="description"
          content="Explora nuestro portafolio de proyectos y soluciones de metal. Con más de 30 años de experiencia apoyando al sector industrial colombiano."
        />
        <meta
          name="keywords"
          content="Mind, portafolio, proyectos, soluciones de metal, sector industrial colombiano, desarrollo de metal, metalmecanica"
        />
      </Helmet>

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
              src={"images/proyecto1.jpg"}
              alt="Proyecto 1"
              className="proyecto-imagen"
            />
            <img
              src={"images/proyecto2.jpg"}
              alt="Proyecto 2"
              className="proyecto-imagen"
            />
            <img
              src={"images/proyecto3.jpg"}
              alt="Proyecto 3"
              className="proyecto-imagen"
            />
            <img
              src={"images/proyecto4.jpg"}
              alt="Proyecto 4"
              className="proyecto-imagen"
            />
            <img
              src={"images/proyecto5.jpg"}
              alt="Proyecto 5"
              className="proyecto-imagen"
            />
            <img
              src={"images/proyecto6.jpg"}
              alt="Proyecto 6"
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
