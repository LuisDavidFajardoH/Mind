import React from "react";
import Navbar from "../navbar/navbar";
import HeaderPagina from "../header-pagina/header-pagina";
import Footer from "../index/footer/footer";
import BotonWhatsapp from "../index/boton-whatsapp/boton-whatsapp";
import "./contacto.css";

const Contacto = () => {
  return (
    <>
      <Navbar />
      <HeaderPagina titulo="Contacto" imagenFondo="Contacto.jpg" />
      <div className="contacto">
        <div className="contacto-info">
          <h3>Contacto</h3>
          <p>
            En esta sección se mostrarán los datos de contacto de la empresa
          </p>
        </div>
      </div>
      <BotonWhatsapp />
      <Footer />
    </>
  );
};

export default Contacto;