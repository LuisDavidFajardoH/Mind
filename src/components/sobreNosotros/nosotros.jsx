import React from "react";
import "./SobreNosotros.css";
import Navbar from "../navbar/navbar";
import Footer from "../index/footer/footer";
import BotonWhatsapp from "../index/boton-whatsapp/boton-whatsapp.jsx";
import { FaFileDownload } from "react-icons/fa";
import HeaderPagina from "../header-pagina/header-pagina.jsx";

const SobreNosotros = () => {
  return (
    <>
      <Navbar />
      <section className="sobre-nosotros">
        <HeaderPagina titulo="Sobre Nosotros" imagenFondo="Hombre-soldando.jpg" />
      </section>
      <section className="sobre-nosotros-info">
        <p className="">
          Mind SAS BIC es una empresa del sector metalmecánico, con más de
          30 años en la industria, que trabaja transformando el metal para
          convertirlo en piezas de distintas características que suplen
          necesidades desde el sector petrolero hasta empresas de decoración
          y acabados.
        </p>
        <h2>Somos una empresa BIC</h2>
        <p>
          A lo largo de la historia Mind SAS BIC, ha buscado evolucionar,
          siempre con un enfoque humanista que le permite impactar
          positivamente tanto el entorno al que pertenece como el equipo con
          el que cuenta. Al conocer las características de una empresa BIC,
          las acciones que se realizan al interior de la organización
          muestran una oportunidad para orientar claramente algunos de los
          esfuerzos y aportar en temas de medio ambiente, de bienestar para
          nuestras partes interesadas y en general, de participar en el
          mercado de una manera más positiva.
        </p>
        <p>
          Es así como en el año 2022 adoptamos la condición BIC y a
          continuación presentamos el primer reporte de Gestión BIC.
        </p>
      </section>
      <section className="reporte-bic">
        <img src="/images/bicAzul.png" alt="Logo BIC" />{" "}
        <h2>Reporte BIC</h2>
        <p>
          Para conocer más acerca de nuestro compromiso como Sociedad BIC, lo
          invitamos a leer nuestro primer Reporte BIC. Haga clic para descargar
          reportes.
        </p>
        <div className="reporte-bic-buttons">
          <a href="/reporte-2022.pdf" download>
            <FaFileDownload /> REPORTE 2022
          </a>
          <a href="/reporte-2023.pdf" download>
            <FaFileDownload /> REPORTE 2023
          </a>
        </div>
      </section>
      <BotonWhatsapp />
      <Footer />
    </>
  );
};

export default SobreNosotros;
