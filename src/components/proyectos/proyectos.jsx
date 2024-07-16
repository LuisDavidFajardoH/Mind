import React from "react";
import Navbar from "../navbar/navbar";
import HeaderPagina from "../header-pagina/header-pagina";
import BotonWhatsapp from "../index/boton-whatsapp/boton-whatsapp";
import Footer from "../index/footer/footer";
import { Helmet } from "react-helmet";
import "./proyectos.css";
import PlantillaProyecto from "./plantilla-proyecto";

const Proyectos = () => {
  return (
    <>
      <Helmet>
        <title>Proyectos - Mind SAS BIC | Innovación en Metalmecánica</title>
        <meta
          name="description"
          content="Explora algunos de nuestros proyectos en Mind SAS BIC. Desde canastas para izaje hasta carros y estantes, descubre nuestras soluciones de metalmecánica innovadoras y de alta calidad."
        />
        <meta
          name="keywords"
          content="Mind SAS BIC, proyectos metalmecánicos, canasta para izaje, carro para cilindros, estante estructural, remolque, soluciones de metal, metalmecánica, innovación en metal, plataforma petrolera, industria automotriz, tubería estructural, malla metálica, varillas, soporte para líneas de vida, armellas, argollas certificadas, recubrimiento rico en zinc, pintura epóxica, pintura poliéster electrostática, limpieza con sand blasting, vehículo con ejes, sistema de tiro, guardabarros, lámina alfajor, diseño de metal, fabricación de metal, transporte de cilindros, acabados de alta resistencia"
        />
      </Helmet>

      <Navbar />
      <HeaderPagina titulo="Proyectos" imagenFondo="proyectos.jpg" />
      <div className="proyectos-pagina">
        <div className="proyectos-container">
          <h2>ALGUNOS DE NUESTROS PROYECTOS</h2>
          <div className="imagenes-proyectos">
            <PlantillaProyecto
              titulo="Gabinete para Telecomunicaciones"
              imagen="images/1.4 GABINETE TELECOMUNICACIONES.png"
              descripcion="Gabinete de diferentes dimensiones (alto, ancho y largo) para usos como disposición de tecnologías para telecomunicaciones a la intemperie. Cuenta con IP65."
            />
            <PlantillaProyecto
              titulo="Escalera Tipo Avión"
              imagen="images/2.1 ESCALERA TIPO AVIÓN.png"
              descripcion="Escaleras de trabajo en sitios de tipo bodegaje y/o para realización de mantenimientos a determinadas alturas. Permite su desplazamiento y ubicación según se necesite."
            />
            <PlantillaProyecto
              titulo="Escalera Tipo Gato"
              imagen="images/3.2 ESCALERA TIPO GATO.png"
              descripcion="Escaleras cuya mayor ventaja es la optimización del espacio horizontal, entre otras. Cuenta con guardas que permiten la postura de líneas de vida, según la norma lo requiere."
            />
            <PlantillaProyecto
              titulo="Escalera Caracol"
              imagen="images/4.1 ESCALERA CARACOL.png"
              descripcion="Escalera con gran sentido estético, ideal para el aprovechamiento de espacios reducidos. Cuenta con guardas laterales, así como puertas de acceso y salida."
            />
            <PlantillaProyecto
              titulo="Escalera Plataforma"
              imagen="images/5.1 ESCALERA PLATAFORMA.png"
              descripcion="Estructura pesada que permitir el ingreso a superficies elevadas. Ideal para la realización y subida de maquinaria y equipos pesados, debido a su estructura y alta resistencia mecánica."
            />
            <PlantillaProyecto
              titulo="Mueble Porta Herramientas"
              imagen="images/6.1 MUEBLE PORTA HERRAMIENTAS.png"
              descripcion="Gabinete con divisiones ecualizables y deslizantes, que permiten el almacenaje de herramentales, moldes y dispositivos de peso."
            />
            <PlantillaProyecto
              titulo="Poste Auxilio Vía"
              imagen="images/7.1 POSTE AUXILIO VÍA.png"
              descripcion="Estructura vertical con altos índices de protección a la intemperie (aguas, vientos), permitiendo su instalación en distintos puntos de la vía garantizando el cuidado de las tecnologías internas."
            />
            <PlantillaProyecto
              titulo="Mueble Locker de 10 Divisiones"
              imagen="images/8.1 LOCKER 10 DIVISIONES.png"
              descripcion="Gabinete de distintas dimensiones, que permite el almacenaje de insumos y EPPS, según se requiera."
            />
          </div>
        </div>
      </div>
      <BotonWhatsapp />
      <Footer />
    </>
  );
};

export default Proyectos;
