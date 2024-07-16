import React from "react";
import "./plantilla-proyecto.css";

function PlantillaProyecto(props) {
    const { imagen, titulo, descripcion } = props;

    return (
        <div className="card-proyecto-container">
            <div className="card-proyecto">
                <div className="card-proyecto-front">
                    <img className="card-proyecto-image" src={imagen} alt={titulo}/>
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
