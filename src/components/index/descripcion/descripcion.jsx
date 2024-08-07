import React from "react";
import { Helmet } from "react-helmet";
import { Pencil, Gear, StatisticUp } from 'akar-icons';
import './descripcion.css';

const Descripcion = () => {
  return (
    <>
      <Helmet>
      <link rel="icon" href="/images/MIND.ico" type="image/x-icon" />
        <title>Descripción - Calidad, Fabricación y Diseño | Mi Empresa</title>
        <meta name="description" content="Conozca más sobre nuestros estándares de calidad, capacidad de fabricación y soluciones de diseño personalizadas en Mi Empresa." />
        <meta name="keywords" content="Calidad, Fabricación, Diseño, ISO 9001:2015, Bureau Veritas Certification" />
      </Helmet>
      <div className="descripcion-container">
        <div className="certificacion">
          <img className="imagen1" src="/images/certificacion-veritas.png" alt="Certificación BUREAU VERITAS" />
        </div>
        <div className="descripcion">
          <div className="caracteristica">
            <Pencil strokeWidth={2} size={40} color={"#006278"} />
            <h2>Calidad</h2>
            <p>Nuestro sistema de gestión de la calidad está certificado según la ISO 9001:2015 por Bureau Veritas Certification.</p>
          </div>
          <div className="caracteristica">
            <StatisticUp strokeWidth={2} size={40} color={"#006278"} />
            <h2>Diseño</h2>
            <p>Diseñamos y desarrollamos soluciones a partir de sus necesidades. Conozca como podemos desarrollar su idea.</p>
          </div>
          <div className="caracteristica">
            <Gear strokeWidth={2} size={40} color={"#006278"} />
            <h2>Fabricación</h2>
            <p>Contamos con la capacidad para conformar el metal a los requerimientos de su diseño. Conozca nuestra capacidad productiva.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Descripcion;
