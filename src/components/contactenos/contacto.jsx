import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../index/footer/footer";
import BotonWhatsapp from "../index/boton-whatsapp/boton-whatsapp";
import HeaderPagina from "../header-pagina/header-pagina";
import { Container, Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./contacto.css";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contacto</title>
      </Helmet>
      <Navbar />
      <HeaderPagina title="Contacto" />
      <Container className="main-container">
        <Box className="left-section">
          <Typography variant="h5" className="venta-title">VENTA</Typography>
          <Typography variant="h4" className="project-title">YAMA PUNTA MUSEO</Typography>
          <Typography variant="body1" className="description">
            Yama Punta Museo es un desarrollo con una propuesta de espacios equilibrados y pensados para el estilo de vida de cada integrante de la familia. La ubicación de este desarrollo es un punto clave al sur de la CDMX, localizado sobre Av. División del Norte a unos minutos de grandes vialidades como Calzada de Tlalpan, Av. Miguel Ángel de Quevedo y Periférico Sur, te permite tener acceso a los principales medios de transporte.
          </Typography>
          <Box className="location-box">
            <LocationOnIcon />
            <span className="location-text">Ver ubicación</span>
          </Box>
        </Box>
        <Box className="separator"></Box>
        <Box className="right-section">
          <img src="building-image.png" alt="Yama Punta Museo" className="building-image" />
        </Box>
      </Container>
      <BotonWhatsapp />
      <Footer />
    </div>
  );
};

export default Contact;
