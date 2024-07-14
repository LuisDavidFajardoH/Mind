import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Helmet } from "react-helmet";
import "./menuEmpresa.css";

const Informacion = () => {
  const [activeTab, setActiveTab] = useState("empresa");

  const renderContent = () => {
    switch (activeTab) {
      case "empresa":
        return (
          <div key="empresa">
            <h2>NUESTRA EMPRESA</h2>
            <p className="p2">
              MIND SAS. se dedica al corte, doblez, curvado de lámina, además de
              perforado con taladro, punzonado CNC, soldadura Mig, Tig y diseño,
              pintura electrostática con un horno de capacidad de 6 metros de
              longitud, proceso incorporado recientemente. Somos una empresa
              metalmecánica fundada en 1.990 bajo el nombre de TECNICORTES que
              surgió de la necesidad de suministrar servicios de calidad para la
              transformación del metal.
            </p>
          </div>
        );
      case "mision":
        return (
          <div key="mision">
            <h2>NUESTRA MISIÓN</h2>
            <p className="p2">
              Atender las necesidades de transformación del metal,
              proporcionando a nuestros clientes servicios, diseños y productos
              que satisfagan sus necesidades, apoyados en personal altamente
              competente, innovando en la generación de valor en la cadena
              productiva de la industria, estableciendo relaciones gana-gana con
              nuestros clientes y proveedores, respetuosos con el medio ambiente
              y entregando a nuestros accionistas una rentabilidad creciente y
              sostenible.
            </p>
          </div>
        );
      case "vision":
        return (
          <div key="vision">
            <h2>NUESTRA VISIÓN</h2>
            <p className="p2">
              Consolidarnos en el 2025 como una organización confiable,
              competitiva y sostenible, enfocados en la innovación de productos
              y servicios del sector metalmecánico liviano, utilizando
              tecnología de punta que contribuya a la optimización de recursos,
              desarrollo y expansión, aportando al fortalecimiento y crecimiento
              de nuestro país.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Información - Nuestra Empresa, Misión y Visión | Mind</title>
        <meta
          name="description"
          content="Conozca más sobre Mind: nuestra empresa, misión y visión. Innovación y sostenibilidad en el sector metalmecánico."
        />
        <meta
          name="keywords"
          content="Mind, empresa, misión, visión, metalmecánico, innovación, sostenibilidad"
        />
      </Helmet>

      <div className="informacion-container">
        <div className="tabs">
          <button
            className={activeTab === "empresa" ? "active" : ""}
            onClick={() => setActiveTab("empresa")}
          >
            EMPRESA
          </button>
          <button
            className={activeTab === "mision" ? "active" : ""}
            onClick={() => setActiveTab("mision")}
          >
            MISIÓN
          </button>
          <button
            className={activeTab === "vision" ? "active" : ""}
            onClick={() => setActiveTab("vision")}
          >
            VISIÓN
          </button>
        </div>
        <div className="content-wrapper">
          <TransitionGroup className="tab-content">
            <CSSTransition
              key={activeTab}
              timeout={500}
              classNames="tab-content"
            >
              {renderContent()}
            </CSSTransition>
          </TransitionGroup>
          <img
            src={"images/logo.png"}
            alt="Nuestra Empresa"
            className="content-image"
          />
        </div>
      </div>
    </>
  );
};

export default Informacion;
