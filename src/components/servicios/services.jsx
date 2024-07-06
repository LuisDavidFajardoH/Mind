import React, { useEffect } from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../index/footer/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ServiciosComponent.css';
import HeaderPagina from '../header-pagina/header-pagina';

const services = [
  { icon: '/images/diseno.png', title: 'Diseño', description: 'Nuestros servicios de diseño incluyen creación de logotipos, diseño de páginas web, y más.' },
  { icon: '/icons/corte.png', title: 'Corte', description: 'Realizamos cortes precisos con tecnología de última generación para diferentes materiales.' },
  { icon: '/icons/punzado.png', title: 'Punzado', description: 'Ofrecemos servicios de punzado con alta precisión y eficiencia.' },
  { icon: '/icons/doblado.png', title: 'Doblado', description: 'Servicios de doblado y curvado de materiales con estándares de calidad.' },
  { icon: '/icons/soldadura.png', title: 'Soldadura', description: 'Realizamos soldadura MIG, TIG, Punto, garantizando durabilidad y resistencia.' },
  { icon: '/icons/acabado.png', title: 'Acabado', description: 'Ofrecemos servicios de acabado y pintura para un toque final perfecto.' },
  { icon: '/icons/lamina.png', title: 'Lámina', description: 'Procesamos láminas de diversos materiales, adaptándonos a tus necesidades.' },
  { icon: '/icons/perfiles.png', title: 'Perfiles', description: 'Fabricamos perfiles de diferentes formas y tamaños, personalizados para tu proyecto.' },
  { icon: '/icons/acero.png', title: 'Acero', description: 'Trabajamos con acero de alta calidad, ofreciendo soluciones robustas y duraderas.' },
  { icon: '/icons/hierro.png', title: 'Hierro', description: 'Servicios especializados en hierro para diferentes aplicaciones industriales.' },
  { icon: '/icons/aluminio.png', title: 'Aluminio', description: 'Procesamos aluminio para múltiples usos, garantizando ligereza y resistencia.' },
  { icon: '/icons/otros.png', title: 'Otros', description: 'Otros servicios de transformación de metales, adaptados a tus necesidades específicas.' },
];

const ServiciosComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <HeaderPagina titulo="Nuestros Servicios" imagenFondo="servicios.jpg" />
      <div className="container">
        <div className="service-container">
          {services.map((service, index) => (
            <div className="service-item" key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
              <img className="icon" src={service.icon} alt={service.title} />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiciosComponent;
