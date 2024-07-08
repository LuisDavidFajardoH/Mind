import React, { useEffect } from 'react';
import Navbar from '../navbar/navbar';
import Separator from '../separador/divider';
import Footer from '../index/footer/footer';
import BotonWhatsapp from '../index/boton-whatsapp/boton-whatsapp';
import HeaderPagina from '../header-pagina/header-pagina';
import Typography from '@mui/material/Typography';
import HearingIcon from '@mui/icons-material/Hearing';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BuildIcon from '@mui/icons-material/Build';
import VerifiedIcon from '@mui/icons-material/Verified';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './DesignSection.css';

const DesignSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    { title: 'Escuchamos', icon: <HearingIcon className="icon" />, description: 'Nos aseguramos de entender tus necesidades antes de empezar cualquier proyecto.', image: 'images/Escuchamos.webp' },
    { title: 'Diseñamos', icon: <DesignServicesIcon className="icon" />, description: 'A partir de sus necesidades generamos ideas y conceptos que luego transformamos en diseños innovadores que respondan a su situación particular.', image: 'images/disenamos.webp' },
    { title: 'Ingeniería', icon: <BuildIcon className="icon" />, description: 'Haciendo uso de la tecnología de simulación y el conocimiento de nuestro personal aseguramos que nuestros diseños cumplan con las especificaciones en términos de resistencia, propiedades de materiales, funcionalidad y durabilidad que usted necesita. Con el software de alta tecnología podemos llevar su pieza desde una idea hasta un producto terminado, simulado y listo para manufactura.,',image: 'images/inge.webp'},
    { title: 'Calidad', icon: <VerifiedIcon className="icon" />, description: 'Nuestros procesos nos permiten asegurar que su producto cumple con las especificaciones de diseño e ingeniería. Adicionalmente damos respaldo y garantía a su empresa de los productos que desarrollemos para usted.', image: 'images/calidad.jpg' },
  ];

  return (
    <>
      <Navbar />
      <HeaderPagina titulo="Diseño" imagenFondo="Hombre-soldando.jpg" />
      <div className="design-section">
        <Typography  style={{marginBottom: "4%"}} variant="h4" className="section-title">
          Nuestra Propuesta de Valor
        </Typography>
        <Typography style={{marginBottom: "4%"}}  variant="body1" className="section-description">
          En nuestra empresa de metalmecánica, nos destacamos por ofrecer un servicio integral que abarca desde la escucha activa de tus necesidades hasta la entrega de productos de la más alta calidad. Nuestro equipo de expertos está comprometido con la innovación y la excelencia en cada paso del proceso.
        </Typography>
        <Separator />
        <div className="feature-container">
          {features.map((feature, index) => (
            <div className={`feature-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index} data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
              <img src={feature.image}   alt={feature.title} className="feature-image" />
              <div className="feature-text">
                <div style={{fontSize:"0rem"}} className="icon-container">
                  {feature.icon}
                </div>
                <Typography  style={{fontSize:"2rem"}} className="feature-title" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography  style={{fontSize:"1rem"}} variant="body2" component="p" className="feature-description">
                  {feature.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
        <Separator />
        <div className="additional-info" data-aos="fade-up">
          <Typography variant="h5" className="additional-title">
            ¿Por qué elegirnos?
          </Typography>
          <Typography variant="body1" className="additional-description">
            Con años de experiencia en la industria de la metalmecánica, nos enorgullece ofrecer servicios de diseño, ingeniería y fabricación que superan las expectativas de nuestros clientes. Nuestro enfoque en la calidad y la innovación nos permite ofrecer soluciones duraderas y eficientes.
          </Typography>
        </div>
      </div>
      <BotonWhatsapp />
      <Footer />
    </>
  );
};

export default DesignSection;
