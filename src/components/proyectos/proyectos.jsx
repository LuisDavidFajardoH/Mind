import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import HeaderPagina from "../header-pagina/header-pagina";
import BotonWhatsapp from "../index/boton-whatsapp/boton-whatsapp";
import Footer from "../index/footer/footer";
import { Helmet } from "react-helmet";
import "./proyectos.css";
import PlantillaProyecto from "./plantilla-proyecto/plantilla-proyecto";

const Proyectos = () => {
  const [filter, setFilter] = useState("todos");

  const proyectos = [
    {
      titulo: "Gabinete para Telecomunicaciones",
      portada: "images/1.4 GABINETE TELECOMUNICACIONES.png",
      descripcion: "Gabinete de diferentes dimensiones (alto, ancho y largo) para usos como disposición de tecnologías para telecomunicaciones a la intemperie. Cuenta con IP65.",
      imagen1: "images/1.1 GABINETE TELECOMUNICACIONES.png",
      imagen2: "images/1.2 GABINETE TELECOMUNICACIONES.png",
      imagen3: "images/1.3 GABINETE TELECOMUNICACIONES.png",
      imagen4: "images/1.4 GABINETE TELECOMUNICACIONES.png",
      categoria: "gabinetes"
    },
    {
      titulo: "Escalera Tipo Avión",
      portada: "images/2.1 ESCALERA TIPO AVIÓN.png",
      descripcion: "Escaleras de trabajo en sitios de tipo bodegaje y/o para realización de mantenimientos a determinadas alturas. Permite su desplazamiento y ubicación según se necesite.",
      imagen1: "images/2.1 ESCALERA TIPO AVIÓN.png",
      imagen2: "images/2.2 ESCALERA TIPO AVIÓN.png",
      imagen3: "images/2.3 ESCALERA TIPO AVIÓN.png",
      imagen4: "images/2.4 ESCALERA TIPO AVIÓN.png",
      categoria: "escaleras"
    },
    {
      titulo: "Escalera Tipo Gato",
      portada: "images/3.2 ESCALERA TIPO GATO.png",
      descripcion: "Escaleras cuya mayor ventaja es la optimización del espacio horizontal, entre otras. Cuenta con guardas que permiten la postura de líneas de vida, según la norma lo requiere.",
      imagen1: "images/3.1 ESCALERA TIPO GATO.png",
      imagen2: "images/3.2 ESCALERA TIPO GATO.png",
      imagen3: "images/3.3 ESCALERA TIPO GATO.png",
      imagen4: "images/3.4 ESCALERA TIPO GATO.png",
      categoria: "escaleras"
    },
    {
      titulo: "Escalera Caracol",
      portada: "images/4.1 ESCALERA CARACOL.png",
      descripcion: "Escalera con gran sentido estético, ideal para el aprovechamiento de espacios reducidos. Cuenta con guardas laterales, así como puertas de acceso y salida.",
      imagen1: "images/4.1 ESCALERA CARACOL.png",
      imagen2: "images/4.2 ESCALERA CARACOL.png",
      imagen3: "images/4.3 ESCALERA CARACOL.png",
      imagen4: "images/4.4 ESCALERA CARACOL.png",
      categoria: "escaleras"
    },
    {
      titulo: "Escalera Plataforma",
      portada: "images/5.1 ESCALERA PLATAFORMA.png",
      descripcion: "Estructura pesada que permite el ingreso a superficies elevadas. Ideal para la realización y subida de maquinaria y equipos pesados, debido a su estructura y alta resistencia mecánica.",
      imagen1: "images/5.1 ESCALERA PLATAFORMA.png",
      imagen2: "images/5.2 ESCALERA PLATAFORMA.png",
      imagen3: "images/5.3 ESCALERA PLATAFORMA.png",
      imagen4: "images/5.4 ESCALERA PLATAFORMA.png",
      categoria: "escaleras"
    },
    {
      titulo: "Mueble Porta Herramientas",
      portada: "images/6.1 MUEBLE PORTA HERRAMIENTAS.png",
      descripcion: "Gabinete con divisiones ecualizables y deslizantes, que permiten el almacenaje de herramentales, moldes y dispositivos de peso.",
      imagen1: "images/6.1 MUEBLE PORTA HERRAMIENTAS.png",
      imagen2: "images/6.2 MUEBLE PORTA HERRAMIENTAS.png",
      imagen3: "images/6.3 MUEBLE PORTA HERRAMIENTAS.png",
      imagen4: "images/6.4 MUEBLE PORTA HERRAMIENTAS.png",
      categoria: "muebles"
    },
    {
      titulo: "Poste Auxilio Vía",
      portada: "images/7.1 POSTE AUXILIO VÍA.png",
      descripcion: "Estructura vertical con altos índices de protección a la intemperie (aguas, vientos), permitiendo su instalación en distintos puntos de la vía garantizando el cuidado de las tecnologías internas.",
      imagen1: "images/7.1 POSTE AUXILIO VÍA.png",
      imagen2: "images/7.2 POSTE AUXILIO VÍA.png",
      imagen3: "images/7.3 POSTE AUXILIO VÍA.png",
      imagen4: "images/7.4 POSTE AUXILIO VÍA.png",
      categoria: "otros"
    },
    {
      titulo: "Mueble Locker de 10 Divisiones",
      portada: "images/8.1 LOCKER 10 DIVISIONES.png",
      descripcion: "Gabinete de distintas dimensiones, que permite el almacenaje de insumos y EPPS, según se requiera.",
      imagen1: "images/8.1 LOCKER 10 DIVISIONES.png",
      imagen2: "images/8.2 LOCKER 10 DIVISIONES.png",
      imagen3: "images/8.3 LOCKER 10 DIVISIONES.png",
      imagen4: "images/8.4 LOCKER 10 DIVISIONES.png",
      categoria: "muebles"
    },
  ];

  const filteredProyectos = filter === "todos" 
    ? proyectos 
    : proyectos.filter(proyecto => proyecto.categoria === filter);

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
      
      <HeaderPagina titulo="Proyectos" imagenFondo="Proyectos.jpg" />
      <div className="proyectos-pagina">
        <div className="proyectos-container">
          <h2>ALGUNOS DE NUESTROS PROYECTOS</h2>
          <div className="filter-buttons">
            <button onClick={() => setFilter("todos")} className={filter === "todos" ? "active" : ""}>Todos</button>
            <button onClick={() => setFilter("escaleras")} className={filter === "escaleras" ? "active" : ""}>Escaleras</button>
            <button onClick={() => setFilter("gabinetes")} className={filter === "gabinetes" ? "active" : ""}>Gabinetes</button>
            <button onClick={() => setFilter("muebles")} className={filter === "muebles" ? "active" : ""}>Muebles</button>
            <button onClick={() => setFilter("otros")} className={filter === "otros" ? "active" : ""}>Otros</button>
          </div>
          <div className="imagenes-proyectos">
            {filteredProyectos.map((proyecto, index) => (
              <PlantillaProyecto
                key={index}
                titulo={proyecto.titulo}
                portada={proyecto.portada}
                descripcion={proyecto.descripcion}
                imagen1={proyecto.imagen1}
                imagen2={proyecto.imagen2}
                imagen3={proyecto.imagen3}
                imagen4={proyecto.imagen4}
              />
            ))}
          </div>
        </div>
      </div>
      <BotonWhatsapp />
      <Footer />
    </>
  );
};

export default Proyectos;