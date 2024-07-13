import React from "react";
import Navbar from "../navbar/navbar";
import HeaderPagina from "../header-pagina/header-pagina";
import BotonWhatsapp from "../index/boton-whatsapp/boton-whatsapp";
import Footer from "../index/footer/footer";
import "./proyectos.css";
import PlantillaProyecto from "./plantilla-proyecto";

const Proyectos = () => {
  return (
    <>
      <Navbar />
      <HeaderPagina titulo="Proyectos" imagenFondo="Proyectos.jpg"/>
      <div className="proyectos-pagina">
        <div className="proyectos-container">
          <h2>ALGUNOS DE NUESTROS PROYECTOS</h2>
          <div className="imagenes-proyectos">
            <PlantillaProyecto titulo="Canasta" imagen='images/proyecto1.jpg' descripcion="Canasta para izaje de personas por medio de grúa, elaborada en tubería estructural, malla, varillas y soporte para líneas de vida con armellas y argollas certificadas para 5 ton y más, y calculada acorde al peso de los ocupantes y, de condiciones de operación. Acabado de alta resistencia, que incluye proceso de limpieza con sand blasting, aplicación de recubrimiento rico en zinc, pintura epóxica y pintura poliéster electrostática con mayor duración en horas de cámara salina. Para operación en plataforma petrolera." />  
            <PlantillaProyecto titulo="Carro" imagen='images/proyecto2.jpg' descripcion="Carro usado para el transporte de cilindros." />
            <PlantillaProyecto titulo="Estante" imagen='images/proyecto3.jpg' descripcion="Estante elaborado con ángulo estructural y lámina formada para usos variados, las divisiones tienen venas para aumentar su resistencia estructural e impedir que se deformen con los posibles impactos. Acabado en pintura electrostática." />
            <PlantillaProyecto titulo="Remolque" imagen='images/proyecto4.jpg' descripcion="Vehículo fabricado en tubería rectangular con ejes y sistema de tiro, con guardabarros en lámina alfajor que evita el deslizamiento, se le puede colocar piso y hacer estructura de carrocería si se requiere." />
            <PlantillaProyecto titulo="Canasta" imagen='images/proyecto5.jpg' descripcion="Este dispositivo tiene laterales abatibles, doble altura, superficies recubiertas con espuma y una estructura que lo hace liviano, y consistente a la vez. Fue diseñado para el movimiento de partes para la industria automotriz." />
            <PlantillaProyecto titulo="Canasta" imagen='images/proyecto1.jpg' descripcion="Canasta para izaje de personas por medio de grúa, elaborada en tubería estructural, malla, varillas y soporte para líneas de vida con armellas y argollas certificadas para 5 ton y más, y calculada acorde al peso de los ocupantes y, de condiciones de operación. Acabado de alta resistencia, que incluye proceso de limpieza con sand blasting, aplicación de recubrimiento rico en zinc, pintura epóxica y pintura poliéster electrostática con mayor duración en horas de cámara salina. Para operación en plataforma petrolera." />  
            <PlantillaProyecto titulo="Carro" imagen='images/proyecto2.jpg' descripcion="Carro usado para el transporte de cilindros." />
            <PlantillaProyecto titulo="Estante" imagen='images/proyecto3.jpg' descripcion="Estante elaborado con ángulo estructural y lámina formada para usos variados, las divisiones tienen venas para aumentar su resistencia estructural e impedir que se deformen con los posibles impactos. Acabado en pintura electrostática." />
            <PlantillaProyecto titulo="Remolque" imagen='images/proyecto4.jpg' descripcion="Vehículo fabricado en tubería rectangular con ejes y sistema de tiro, con guardabarros en lámina alfajor que evita el deslizamiento, se le puede colocar piso y hacer estructura de carrocería si se requiere." />
            <PlantillaProyecto titulo="Canasta" imagen='images/proyecto5.jpg' descripcion="Este dispositivo tiene laterales abatibles, doble altura, superficies recubiertas con espuma y una estructura que lo hace liviano, y consistente a la vez. Fue diseñado para el movimiento de partes para la industria automotriz." />
            <PlantillaProyecto titulo="Canasta" imagen='images/proyecto1.jpg' descripcion="Canasta para izaje de personas por medio de grúa, elaborada en tubería estructural, malla, varillas y soporte para líneas de vida con armellas y argollas certificadas para 5 ton y más, y calculada acorde al peso de los ocupantes y, de condiciones de operación. Acabado de alta resistencia, que incluye proceso de limpieza con sand blasting, aplicación de recubrimiento rico en zinc, pintura epóxica y pintura poliéster electrostática con mayor duración en horas de cámara salina. Para operación en plataforma petrolera." />  
            <PlantillaProyecto titulo="Carro" imagen='images/proyecto2.jpg' descripcion="Carro usado para el transporte de cilindros." />
          </div>
        </div>
      </div>
      <BotonWhatsapp />
      <Footer />
    </>
  );
};

export default Proyectos;