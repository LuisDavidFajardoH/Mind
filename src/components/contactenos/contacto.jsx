import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../index/footer/footer";
import BotonWhatsapp from "../index/boton-whatsapp/boton-whatsapp";
import HeaderPagina from "../header-pagina/header-pagina";
import { Container, Box, Typography, Card, CardContent, IconButton } from "@mui/material";
import { Helmet } from "react-helmet";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./contacto.css";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contacto</title>
      </Helmet>
      <Navbar />
      <HeaderPagina titulo="Contacto" imagenFondo="contactenos.jpg" />
      <Container className="main-container">
        <Box className="left-section">
          <Typography variant="h5" className="venta-title">Contáctanos</Typography>
          <Typography variant="h4" className="project-title">MIND SAS</Typography>
          <Typography variant="body1" className="description">
            En MIND SAS, con más de 25 años de experiencia en el sector metalmecánico colombiano, diseñamos y desarrollamos soluciones a partir de sus necesidades. Con una capacidad productiva avanzada y un sistema de gestión de calidad certificado según la ISO 9001:2015 por Bureau Veritas Certification, estamos listos para transformar sus ideas en realidad. ¡Visítenos en Av. Américas Calle 20 # 39 – 35, Bogotá D.C. o agende su cita hoy mismo al (+57) 311 289 7588!
          </Typography>
          <Box className="location-box">
            <LocationOnIcon />
            <a href="https://maps.app.goo.gl/HvCYpJ1PQymHbyez6" target="_blank" className="location-text">Ver ubicación</a>
          </Box>
          <Card className="social-card">
            <CardContent>
              <Typography variant="h6" className="social-title">Síguenos en:</Typography>
              <Box className="social-icons">
                <IconButton href="https://www.instagram.com/metalmind.sas_bic/" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon />
                </IconButton>
                <IconButton href="https://www.facebook.com/MINDSASBIC" target="_blank" rel="noopener noreferrer">
                  <FacebookIcon />
                </IconButton>
                <IconButton href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box className="right-section">
          <img src="images/contactanos.jpg" alt="Yama Punta Museo" className="building-image" />
        </Box>
      </Container>
      <Container className="info-container">
        <Card className="info-card" style={{ backgroundImage: 'url(images/fondoContacto.webp)' }}>
          <CardContent className="info-overlay">
            <CardContent className="info-content">
              <Box className="info-section">
                <Typography variant="h6" className="info-title">HORARIO</Typography>
                <Typography variant="body2">Lunes a Viernes: 8:00 am a 5:00 pm</Typography>
                <Typography variant="body2">Sábados: Cerrado</Typography>
                <Typography variant="body2">Domingos: Cerrado</Typography>
              </Box>
              <Box className="info-section">
                <Typography variant="h6" className="info-title">E-MAIL</Typography>
                <Typography variant="body2"> info@metalmindsa.com</Typography>
              </Box>
              <Box className="info-section">
                <Typography variant="h6" className="info-title">TELÉFONO</Typography>
                <Typography variant="body2"> (+57) 311 289 7588</Typography>
              </Box>
              <Box className="info-section">
                <Typography variant="h6" className="info-title">DIRECCIÓN</Typography>
                <Typography variant="body2">Av. Américas Calle 20 # 39 – 35</Typography>
                <Typography variant="body2">Bogotá D.C. – Colombia</Typography>
              </Box>
            </CardContent>
          </CardContent>
        </Card>
      </Container>
      <BotonWhatsapp />
      <Footer />
    </div>
  );
};

export default Contact;
