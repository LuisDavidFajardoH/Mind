import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../index/footer/footer';
import BotonWhatsapp from '../index/boton-whatsapp/boton-whatsapp';
import HeaderPagina from '../header-pagina/header-pagina';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
import Map from './map/maps';
import './contacto.css';

const Contact = () => {
  return (
    <>
      <Navbar />
      <HeaderPagina titulo="Contacto" imagenFondo="contactenos.jpg" />
      <Container className="contact-container">
        <Box className="contact-box">
          <Box className="contact-form">
            <Typography variant="h4" className="contact-title">
              ¡Contáctanos!
            </Typography>
            <Box className="contact-input-box">
              <PersonIcon className="contact-icon" />
              <TextField
                variant="outlined"
                label="Nombre"
                fullWidth
                margin="normal"
                InputLabelProps={{ className: 'contact-input-label' }}
                InputProps={{ className: 'contact-input' }}
              />
            </Box>
            <Box className="contact-input-box">
              <EmailIcon className="contact-icon" />
              <TextField
                variant="outlined"
                label="Correo"
                fullWidth
                margin="normal"
                InputLabelProps={{ className: 'contact-input-label' }}
                InputProps={{ className: 'contact-input' }}
              />
            </Box>
            <Box className="contact-input-box">
              <MessageIcon className="contact-icon" />
              <TextField
                variant="outlined"
                label="Mensaje"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                InputLabelProps={{ className: 'contact-input-label' }}
                InputProps={{ className: 'contact-input' }}
              />
            </Box>
            <Button variant="contained" className="contact-buttonC">
              Enviar Mensaje
            </Button>
          </Box>
          <Box className="contact-image">
            <img src="images/Contacto.webp" alt="Contact" className="contact-image-element" />
          </Box>
        </Box>
      </Container>

      <Container className="mid-section-container">
        <Box className="mid-section">
          <Box className="mid-section-image">
            <img src="images/servicios.jpg" alt="Working" className="mid-image-element" />
          </Box>
          <Box className="mid-section-qr">
            <Typography variant="h5" className="mid-section-title">
              Queremos conocer tu opinión
            </Typography>
            <img src="images/Qr.png" alt="QR Code" className="mid-qr-element" />
          </Box>
        </Box>
      </Container>

      <Container className="map-container">
        <Map />
      </Container>
      <BotonWhatsapp />
      <Footer />
    </>
  );
};

export default Contact;
