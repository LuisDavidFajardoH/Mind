import React, { useEffect } from "react";
import Navbar from "../navbar/navbar.jsx";
import Footer from "../index/footer/footer.jsx";
import BotonWhatsapp from "../index/boton-whatsapp/boton-whatsapp.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import "./servicios.css";
import HeaderPagina from "../header-pagina/header-pagina.jsx";
import { ArrowRight } from "akar-icons";
import { Helmet } from "react-helmet";

// Importa el archivo PDF
import recomendacionesPDF from './Recomendaciones.pdf';

const services = [
  {
    icon: "/images/servicio-diseno.jpg",
    title: "Diseño",
    description:
      "Nuestros servicios de diseño incluyen creación de logotipos, diseño de páginas web, y más.",
  },
  {
    icon: "/images/servicio-corte.jpg",
    title: "Corte",
    description:
      "Realizamos cortes precisos con tecnología de última generación para diferentes materiales.",
  },
  {
    icon: "/images/servicio-punzado.jpg",
    title: "Punzado",
    description:
      "Ofrecemos servicios de punzado con alta precisión y eficiencia.",
  },
  {
    icon: "/images/servicio-doblado.jpg",
    title: "Doblado",
    description:
      "Servicios de doblado y curvado de materiales con estándares de calidad.",
  },
  {
    icon: "/images/servicio-soldadura.jpg",
    title: "Soldadura",
    description:
      "Realizamos soldadura MIG, TIG, Punto, garantizando durabilidad y resistencia.",
  },
  {
    icon: "/images/servicio-acabado.jpg",
    title: "Acabado",
    description:
      "Ofrecemos servicios de acabado y pintura para un toque final perfecto.",
  },
];

const materials = [
  {
    icon: "/images/material-lamina.jpg",
    title: "Lámina",
    description:
      "Procesamos láminas de diversos materiales, adaptándonos a tus necesidades.",
  },
  {
    icon: "/images/material-perfiles.jpg",
    title: "Perfiles",
    description:
      "Fabricamos perfiles de diferentes formas y tamaños, personalizados para tu proyecto.",
  },
  {
    icon: "/images/material-acero.jpg",
    title: "Acero",
    description:
      "Trabajamos con acero de alta calidad, ofreciendo soluciones robustas y duraderas.",
  },
  {
    icon: "/images/material-hierro.jpg",
    title: "Hierro",
    description:
      "Servicios especializados en hierro para diferentes aplicaciones industriales.",
  },
  {
    icon: "/images/material-aluminio.jpg",
    title: "Aluminio",
    description:
      "Procesamos aluminio para múltiples usos, garantizando ligereza y resistencia.",
  },
  {
    icon: "/images/material-otros.jpg",
    title: "Otros",
    description:
      "Otros servicios de transformación de metales, adaptados a tus necesidades específicas.",
  },
];

const ServiciosComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <Helmet>
      <link rel="icon" href="/images/MIND.ico" type="image/x-icon" />
        <title>
          Servicios y Materiales - Mind SAS BIC | Innovación en Metalmecánica
        </title>
        <meta
          name="description"
          content="Descubre los servicios y materiales que ofrecemos en Mind SAS BIC. Desde diseño y corte hasta punzado, doblado, soldadura y acabados. Trabajamos con láminas, perfiles, acero, hierro, aluminio y más."
        />
        <meta
          name="keywords"
          content="Mind SAS BIC, servicios metalmecánicos, diseño de metal, corte de metal, punzado, doblado, soldadura MIG, soldadura TIG, acabados, pintura, láminas de metal, perfiles de metal, acero, hierro, aluminio, transformación de metales"
        />
      </Helmet>

      <Navbar />
      <HeaderPagina
        titulo="Nuestros Servicios"
        imagenFondo="nuestros-servicios.jpg"
      />
      <div className="container">
        <h2 className="section-title2">Servicios</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className="flip-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    className="icon"
                    src={service.icon}
                    alt={service.title}
                  />
                  <h3 className="service-title">{service.title}</h3>
                </div>
                <div className="flip-card-back">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="section-title2">Materiales</h2>
        <div className="materials-grid">
          {materials.map((material, index) => (
            <div
              className="flip-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    className="icon"
                    src={material.icon}
                    alt={material.title}
                  />
                  <h3 className="material-title">{material.title}</h3>
                </div>
                <div className="flip-card-back">
                  <h3 className="material-title">{material.title}</h3>
                  <p className="material-description">{material.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pdf-button-center">
          <a href={recomendacionesPDF} target="_blank" className="pdf-button">
            Recomendaciones <ArrowRight strokeWidth={2} size={17} />
          </a>
        </div>
      </div>
      <BotonWhatsapp />
      <Footer />
    </>
  );
};

export default ServiciosComponent;
