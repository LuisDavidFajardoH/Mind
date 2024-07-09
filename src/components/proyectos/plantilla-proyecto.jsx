import React from "react";
import "./plantilla-proyecto.css";

function PlantillaProyecto(props) {
    const { imagen, titulo, descripcion } = props;

    return (
        <div className="card-proyecto-container">
            <div className="card-proyecto">
                <div className="card-proyecto-front">
                    <img src={imagen} alt={titulo} className="card-proyecto-image" />
                </div>
                <div className="card-proyecto-back">
                    <h3>{titulo}</h3>
                    <p>{descripcion}</p>
                </div>
            </div>
        </div>
    );
}

export default PlantillaProyecto;
