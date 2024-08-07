import React from "react";
import Navbar from "../navbar/navbar.jsx";
import Footer from "../index/footer/footer.jsx";
import BotonWhatsapp from "../index/boton-whatsapp/boton-whatsapp.jsx";
import { FaFileDownload } from "react-icons/fa";
import HeaderPagina from "../header-pagina/header-pagina.jsx";
import { Helmet } from "react-helmet";
import "./SobreNosotros.css";

// Importa los archivos PDF
import reporte2022 from './BIC_2022.pdf';
import reporte2023 from './REPORTE_BIC_2023.pdf';

const SobreNosotros = () => {
  return (
    <>
      <Helmet>
      <link rel="icon" href="/images/MIND.ico" type="image/x-icon" />
        <title>
          Sobre Nosotros - Mind SAS BIC | Innovación en Metalmecánica
        </title>
        <meta
          name="description"
          content="Conoce más sobre Mind SAS BIC, una empresa del sector metalmecánico con más de 30 años de experiencia transformando el metal. Descubre nuestro compromiso como Sociedad BIC y descarga nuestros reportes de gestión."
        />
        <meta
          name="keywords"
          content="Mind SAS BIC, sobre nosotros, empresa metalmecánica, transformación del metal, industria, sector petrolero, decoración, acabados, empresa BIC, responsabilidad social, medio ambiente, bienestar, reporte BIC"
        />
      </Helmet>

      <Navbar />
      <section className="sobrenosotros">
        <HeaderPagina
          titulo="Sobre Nosotros"
          imagenFondo="sobre-nosotros-equipo.jpg"
        />
        <div className="side-images-container">
          <img
            className="side-image"
            src="/images/x.jpg"
            alt="Imagen lateral izquierda"
          />
          <section className="sobrenosotros-info">
            <h2>Sobre Nosotros</h2>
            <p>
              Mind SAS BIC es una empresa del sector metalmecánico, con más de
              30 años en la industria, que trabaja transformando el metal para
              convertirlo en piezas de distintas características que suplen
              necesidades desde el sector petrolero hasta empresas de decoración
              y acabados.
            </p>
            <h2>Somos una Empresa BIC</h2>
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
            <img
              className="logo-bic"
              src="/images/bicAzul.png"
              alt="Logo BIC"
            />
            <h2>Reporte BIC</h2>
            <p>
              Para conocer más acerca de nuestro compromiso como Sociedad BIC,
              lo invitamos a leer nuestro primer Reporte BIC. Haga clic para
              leer los reportes.
            </p>
            <div className="reporte-bic-buttons">
              <a href={reporte2022} target="_blank" rel="noopener noreferrer">
                <FaFileDownload /> REPORTE 2022
              </a>
              <a href={reporte2023} target="_blank" rel="noopener noreferrer">
                <FaFileDownload /> REPORTE 2023
              </a>
            </div>
          </section>
          <img
            className="side-image"
            src="/images/z.jpg"
            alt="Imagen lateral derecha"
          />
        </div>
        <section className="sobrenosotros-reconocimiento">
          <h2 className="reconocimiento-titulo">En Reconocimiento a su Legado, Trabajo y Compromiso</h2>
          <div className="reconocimiento-grid">
            <div className="reconocimiento-item">
              <img src="/images/imagen-abuela.jpeg" alt="María Rosalba Acevedo" />
              <h1>María Rosalba Acevedo</h1>
              <p>Fundadora</p>
            </div>
            <div className="reconocimiento-item">
              <img src="/images/imagen-papa.jpg" alt="Hernando Sánchez" />
              <h1>Hernando Sánchez</h1>
              <p>Colaborador</p>
            </div>
            <div className="reconocimiento-item">
              <img src="/images/imagen-mama.jpg" alt="Gabriela Rueda Acevedo" />
              <h1>Gabriela Rueda Acevedo</h1>
              <p>Directora junta directíva</p>
            </div>
          </div>
        </section>
      </section>
      <BotonWhatsapp />
      <Footer />
    </>
  );
};

export default SobreNosotros;
