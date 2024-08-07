import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import Navbar from "../navbar/navbar";
import HeaderPagina from "../header-pagina/header-pagina";
import Footer from "../index/footer/footer";
import BotonWhatsapp from "../index/boton-whatsapp/boton-whatsapp";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DescriptionIcon from "@mui/icons-material/Description";
import Separator from "../separador/divider";
import PeopleIcon from "@mui/icons-material/People";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LineWeightIcon from "@mui/icons-material/LineWeight";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Helmet } from "react-helmet";
import "./politicas.css";
import politicasTratamientoPDF from './politicas-de-tratamiento.pdf';

const objectives = [
  {
    icon: <PeopleIcon fontSize="large" />,
    text: "Contribuir con la satisfacción del cliente.",
  },
  {
    icon: <LocalShippingIcon fontSize="large" />,
    text: "Mejorar el cumplimiento en los tiempos de entrega.",
  },
  {
    icon: <DescriptionIcon fontSize="large" />,
    text: "Disminuir las salidas no conformes (PNC).",
  },
  {
    icon: <PeopleIcon fontSize="large" />,
    text: "Fortalecer las capacidades de los colaboradores.",
  },
  {
    icon: <TrendingUpIcon fontSize="large" />,
    text: "Aumentar la rentabilidad de la empresa.",
  },
  {
    icon: <CheckCircleIcon fontSize="large" />,
    text: "Mejorar continuamente nuestro Sistema de gestión de calidad.",
  },
  {
    icon: <LineWeightIcon fontSize="large" />,
    text: "Disminuir la materialización de los riesgos.",
  },
  {
    icon: <AccessTimeIcon fontSize="large" />,
    text: "Dar cumplimiento a los requisitos aplicables.",
  },
];

const Politicas = () => {
  return (
    <>
      <Helmet>
      <link rel="icon" href="/images/MIND.ico" type="image/x-icon" />
        <title>Política de Calidad - Mind SAS BIC | Metalmecánica</title>
        <meta
          name="description"
          content="Conozca nuestra Política de Calidad en Mind SAS BIC. Nos comprometemos a brindar productos y servicios metalmecánicos que satisfagan y superen los requisitos de nuestros clientes, con eficiencia y compromiso de mejora continua."
        />
        <meta
          name="keywords"
          content="Mind SAS BIC, política de calidad, metalmecánica, satisfacción del cliente, tiempos de entrega, productos no conformes, colaboradores, rentabilidad, gestión de calidad, seguridad de procesos, requisitos aplicables"
        />
      </Helmet>

      <Navbar />
      <HeaderPagina
        titulo="Política de Calidad"
        imagenFondo="politica-de-calidad.jpg"
      />
      <div className="section-background">
        <Container>
          <Box className="calidadP">
            <Typography
              variant="h3"
              className="title animate__animated animate__fadeInDown"
              gutterBottom
            >
              Política de Calidad
            </Typography>
            <Box className="text-box">
              <Typography
                variant="body1"
                className="text animate__animated animate__fadeInUp"
              >
                Nos comprometemos a brindar productos y servicios
                metalmecánicos, que satisfagan y superen los requisitos de
                nuestros clientes, ofreciendo respuesta oportuna, bajo costo y
                garantía, con personal competente, eficiencia en la asignación
                de recursos, compromiso de mejora continua, seguridad de
                nuestros procesos y cumpliendo con los requisitos aplicables.
              </Typography>
            </Box>
          </Box>
          <Separator />
          <Box className="sectionP objectives-section">
            <Typography
              variant="h4"
              className="title animate__animated animate__fadeInDown"
              gutterBottom
            >
              Objetivos de Calidad
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              {objectives.map((objective, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                  <Box className="objective-box animate__animated animate__zoomIn">
                    {objective.icon}
                    <Typography variant="body1" className="text">
                      {objective.text}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Separator />
          <Box className="sectionP download-section">
            <Typography
              variant="h5"
              className="title animate__animated animate__fadeInDown"
              gutterBottom
            >
              Políticas de Tratamiento
            </Typography>
            <Box className="download-box">
              <a
                href={politicasTratamientoPDF}
                target="_blank"
                rel="noopener noreferrer"
                className="download-button "
              >
                Políticas de Tratamiento
              </a>
            </Box>
          </Box>
        </Container>
      </div>
      <BotonWhatsapp />
      <Footer />
    </>
  );
};

export default Politicas;
