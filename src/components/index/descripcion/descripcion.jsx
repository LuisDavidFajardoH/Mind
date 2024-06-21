import React from "react";
import {Pencil, Gear, StatisticUp} from 'akar-icons';
import './descripcion.css';

const Descripcion = () => {
  return (
    <div>
        
        <div className="certificacion">
            <img class="imagen1" src="/images/certificacion-veritas.png" alt="Certificación BUREAU VERITAS"/>
        </div>

        <div className="descripcion">

            <div className="caracteristica">
                <Pencil strokeWidth={2} size={40} color={"#006278"}/>
                <h2>Calidad</h2>
                <p>Nuestro sistema de gestión de la calidad está certificado según la ISO 9001:2015 por Bureau Veritas Certification.</p>
            </div>

            <div className="caracteristica">
                <Gear strokeWidth={2} size={40} color={"#006278"}/>
                <h2>Fabricación</h2>
                <p>Contamos con la capacidad para conformar el metal a los requerimientos de su diseño. Conozca nuestra capacidad productiva.</p>
            </div>

            <div className="caracteristica">
                <StatisticUp strokeWidth={2} size={40} color={"#006278"}/>
                <h2>Diseño</h2>
                <p>Diseñamos y desarrollamos soluciones a partir de sus necesidades. Conozca como podemos desarrollar su idea.</p>
            </div>

        </div>

    </div>
  );
};

export default Descripcion;