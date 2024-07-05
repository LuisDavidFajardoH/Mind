import React from 'react';
import './ServiciosComponent.css';

const services = [
  { icon: '/icons/diseno.png', title: 'Diseño', description: 'Nuestros servicios de diseño incluyen...' },
  { icon: '/icons/corte.png', title: 'Corte', description: 'Realizamos cortes precisos...' },
  { icon: '/icons/punzado.png', title: 'Punzado', description: 'Ofrecemos servicios de punzado...' },
  { icon: '/icons/doblado.png', title: 'Doblado', description: 'Servicios de doblado y curvado...' },
  { icon: '/icons/soldadura.png', title: 'Soldadura', description: 'Realizamos soldadura MIG, TIG, Punto...' },
  { icon: '/icons/acabado.png', title: 'Acabado', description: 'Ofrecemos servicios de acabado y pintura...' },
  { icon: '/icons/lamina.png', title: 'Lámina', description: 'Procesamos láminas de diversos materiales...' },
  { icon: '/icons/perfiles.png', title: 'Perfiles', description: 'Fabricamos perfiles de diferentes formas...' },
  { icon: '/icons/acero.png', title: 'Acero', description: 'Trabajamos con acero de alta calidad...' },
  { icon: '/icons/hierro.png', title: 'Hierro', description: 'Servicios especializados en hierro...' },
  { icon: '/icons/aluminio.png', title: 'Aluminio', description: 'Procesamos aluminio para múltiples usos...' },
  { icon: '/icons/otros.png', title: 'Otros', description: 'Otros servicios de transformación de metales...' },
];

const ServiciosComponent = () => {
  return (
    <div className="container">
      <h2 className="title">NUESTROS SERVICIOS</h2>
      <div className="service-container">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <img className="icon" src={service.icon} alt={service.title} />
            <h3 className="service-title">{service.title}</h3>
            <div className="service-info">
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiciosComponent;
