import React from "react";
import "./plantilla-proyecto.css";
import PlantillaCarrusel from "./plantilla-carrusel/plantilla-carrusel";

function PlantillaProyecto(props) {
    const {portada, titulo, descripcion, imagen1, imagen2, imagen3, imagen4} = props;

    return (
        <div className="card-proyecto-container">
            <div className="card-proyecto">
                <div className="card-proyecto-front">
                    <img className="card-proyecto-image" src={portada} alt={titulo}/>
                </div>
                <div className="card-proyecto-back">
                    <div className="card-proyecto-back-content">
                        <h3>{titulo}</h3>
                        <div className="carrusel-container">
                            <PlantillaCarrusel
                                imagen1={imagen1}
                                imagen2={imagen2}
                                imagen3={imagen3}
                                imagen4={imagen4}
                                titulo={titulo}
                            />
                        </div>
                        <p>{descripcion}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlantillaProyecto;