import React from "react";
import Navbar from "../navbar/navbar";
import HeaderPagina from "../header-pagina/header-pagina";
import BotonWhatsapp from "../index/boton-whatsapp/boton-whatsapp";
import Footer from "../index/footer/footer";
import "./proyectos.css";

const Proyectos = () => {
  return (
    <>
      <Navbar />
      <HeaderPagina titulo="Proyectos" imagenFondo="Proyectos.jpg" />
      <div className="proyectos">
        <div className="proyectos-info">
          <h3>Proyectos</h3>
          <p>
            En esta sección se mostrarán los proyectos realizados por la empresa
          </p>
        </div>
      </div>
      <BotonWhatsapp />
      <Footer />
    </>
  );
};

export default Proyectos;