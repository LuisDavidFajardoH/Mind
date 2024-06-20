import React from "react";
import {Pencil, Gear, StatisticUp} from 'akar-icons';
import './descripcion.css';

const Descripcion = () => {
  return (
    <div>

        <div className="calidad">
            <div className="calidad_descripcion">
                <Pencil size={40} />
                <h2>Calidad</h2>
                <p>Nuestro sistema de gestión de la calidad está certificado según la ISO 9001:2015 por Bureau Veritas Certification.</p>
            </div>
            <div className="calidad_imagenes">
                <div>
                    <img src="imagenes/Logo-Mind.png" alt="Mind"/>
                </div>
                <div>
                    <img src="imagenes/Certificacion-Veritas.jpeg" alt="Certificación BUREAU VERITAS"/>
                </div>
                
            </div>
            
        </div>

        <div className="descripcion">

            <div className="section">
                <Gear strokeWidth={2} size={40} />
                <h2>Fabricación</h2>
                <p>Contamos con la capacidad para conformar el metal a los requerimientos de su diseño. Conozca nuestra capacidad productiva.</p>
            </div>

            <div className="section">
                <StatisticUp strokeWidth={2} size={40} />
                <h2>Diseño</h2>
                <p>Diseñamos y desarrollamos soluciones a partir de sus necesidades. Conozca como podemos desarrollar su idea.</p>
            </div>

        </div>

    </div>
  );
};

export default Descripcion;