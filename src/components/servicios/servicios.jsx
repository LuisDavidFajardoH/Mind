import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar.jsx";
import Footer from "../index/footer/footer.jsx";
import BotonWhatsapp from "../index/boton-whatsapp/boton-whatsapp.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import "./servicios.css";
import HeaderPagina from "../header-pagina/header-pagina.jsx";
import { ArrowRight } from "akar-icons";
import { Helmet } from "react-helmet";
import Modal from "react-modal";

// Importa el archivo PDF
import recomendacionesPDF from "./Recomendaciones.pdf";

Modal.setAppElement("#root"); // Configuración necesaria para accesibilidad

const services = [
  {
    icon: "/images/servicio-diseno.jpg",
    modalIcon: "/images/disenamosModal.jpg", // Nueva imagen para el modal
    title: "Diseño",
    description:
      "Ofrecemos un servicio de diseño personalizado que se adapta perfectamente a sus requerimientos.",
    modalDescription:
      "En Mind SAS BIC, entendemos que cada proyecto es único. Por eso, ofrecemos un servicio de diseño personalizado que se adapta perfectamente a sus requerimientos. Desde la idea inicial hasta el producto final, trabajamos con usted para crear soluciones de alta calidad que superen sus expectativas. ¡Cotice con nosotros y transformemos su visión en realidad con precisión y dedicación!",
  },
  {
    icon: "/images/servicio-corte.jpg",
    modalIcon: "/images/corteModal.jpg", // Nueva imagen para el modal
    title: "Corte de lámina",
    description:
      "Realizamos cortes de lámina de alta calidad con precisión y eficiencia, garantizando resultados excepcionales para su proyecto.",
    modalDescription:
      "En Mind SAS BIC ofrecemos cortes de lámina que superan sus expectativas. Nuestra maquinaria de vanguardia y nuestro equipo de expertos trabajan para garantizar que cada corte sea preciso. No importa el tamaño de su proyecto, nosotros lo hacemos realidad con rigor y perfección. ¡Confíe en nosotros para llevar sus ideas al siguiente nivel!",
  },
  {
    icon: "/images/servicio-punzado.jpg",
    modalIcon: "/images/punzadaModal.webp", // Nueva imagen para el modal
    title: "Punzonado",
    description:
      "Expertos en punzonado de metal con tecnología avanzada para perforaciones precisas y eficientes.",
    modalDescription:
      "En Mind SAS BIC, somos expertos en el punzonado de metal, un proceso que realizamos con la más alta tecnología y precisión. Nuestro servicio de punzonado asegura perforaciones exactas. ¡Cotice con nosotros y descubra cómo nuestra experiencia puede marcar la diferencia en la calidad y eficiencia de su producción!",
  },
  {
    icon: "/images/servicio-doblado.jpg",
    modalIcon: "/images/dobladoModal.jpg", // Nueva imagen para el modal
    title: "Doblado",
    description:
      "Ejecutamos el doblez de láminas con precisión milimétrica y atención al detalle, garantizando resultados excepcionales.",
    modalDescription:
      "En Mind SAS BIC, el doblez de lámina es un proceso que ejecutamos con precisión milimétrica y atención al detalle. Nuestro equipo de expertos se asegura de que cada pliegue y curva se realicen con exactitud, garantizando que su proyecto no solo cumpla, sino que supere sus expectativas. Ya sea para piezas simples o complejas, nuestro servicio se adapta a sus necesidades.",
  },
  {
    icon: "/images/servicio-soldadura.jpg",
    modalIcon: "/images/ingenieria.jpg", // Nueva imagen para el modal
    title: "Soldadura",
    description:
      "Ofrecemos un servicio de soldadura que combina experiencia, precisión y tecnología de vanguardia para asegurar uniones fuertes y duraderas.",
    modalDescription:
      "En Mind SAS BIC, ofrecemos un servicio de soldadura que combina experiencia, precisión y tecnología de vanguardia para asegurar uniones fuertes y duraderas en cada proyecto. Entendemos que cada cliente tiene requerimientos únicos, por lo que nos especializamos en adaptar nuestros procesos para cumplir con sus especificaciones exactas, garantizando la máxima calidad en cada soldadura.",
  },
  {
    icon: "/images/servicio-acabado.jpg",
    modalIcon: "/images/acabadosModal.jpg", // Nueva imagen para el modal
    title: "Acabados",
    description:
      "Nos especializamos en ofrecer acabados de alta calidad que no solo protegen, sino que también realzan la estética de sus productos.",
    modalDescription:
      "En Mind SAS BIC, nos especializamos en ofrecer acabados de alta calidad que no solo protegen, sino que también realzan la estética de sus productos. Nuestro proceso incluye la aplicación de pintura electrostática, una técnica avanzada que garantiza una cobertura uniforme, duradera y resistente a la corrosión.",
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
      "Utilizamos y fabricamos perfiles de diferentes formas y tamaños, personalizados para tu proyecto.",
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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const openModal = (service) => {
    setSelectedService(service);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <Helmet>
        <link rel="icon" href="/images/MIND.ico" type="image/x-icon" />
        <title>
          Servicios y Materiales - Mind SAS BIC | Innovación en Metalmecánica
        </title>
        <meta
          name="description"
          content="Descubre los servicios y materiales que ofrecemos en Mind SAS BIC..."
        />
        <meta
          name="keywords"
          content="Mind SAS BIC, servicios metalmecánicos, diseño de metal, corte de metal, etc."
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
              onClick={() => openModal(service)}
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

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Información del Servicio"
        className="modal"
        overlayClassName="overlay"
      >
        {selectedService && (
          <div className="modal-content">
            <div className="modal-header">
              <h2 style={{ color: "white" }}>{selectedService.title}</h2>
            </div>
            <div className="modal-body">
              <div style={{ marginRight: "5%" }} className="modal-image">
                <img
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    maxHeight: "136px",
                    borderRadius: "8px",
                  }}
                  src={selectedService.modalIcon}
                  alt={selectedService.title}
                />
              </div>
              <p>{selectedService.modalDescription}</p>
            </div>
            <div className="modal-footer">
              <p className="modal-cta">
                ¡Cotice hoy y vea cómo nuestros servicios de calidad pueden
                llevar su proyecto al siguiente nivel!
              </p>
              <button onClick={closeModal}>Cerrar</button>
            </div>
          </div>
        )}
      </Modal>

      <BotonWhatsapp />
      <Footer />
    </>
  );
};

export default ServiciosComponent;
