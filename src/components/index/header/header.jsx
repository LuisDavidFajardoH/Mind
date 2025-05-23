import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./Header.css";

const Header = () => {
  useEffect(() => {
    const videoDesktop = document.querySelector(".desktop-video");
    const videoMobile = document.querySelector(".mobile-video");

    if (videoDesktop && videoMobile) {
      videoDesktop.addEventListener("error", handleVideoError);
      videoMobile.addEventListener("error", handleVideoError);
    }

    function handleVideoError() {
      console.error("Error loading video");
    }

    // Cleanup function to remove event listeners
    return () => {
      if (videoDesktop) {
        videoDesktop.removeEventListener("error", handleVideoError);
      }
      if (videoMobile) {
        videoMobile.removeEventListener("error", handleVideoError);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <link rel="icon" href="/images/MIND.ico" type="image/x-icon" />
        <title>Inicio - Piezas de Metal, Piezas de Futuro | Mind</title>
        <meta
          name="description"
          content="Descubre Mind: Innovación en piezas de metal para el futuro. Contáctanos para más información."
        />
        <meta
          name="keywords"
          content="Mind, piezas de metal, innovación, futuro, fabricación de metal"
        />
      </Helmet>

      <header className="header">
        <div className="video-container">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="video-background desktop-video"
          >
            <source src="/images/video-horizontal.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="video-background mobile-video"
          >
            <source src="/images/video-vertical.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="content">
          <div className="header-text">
            <h1>Mind</h1>
            <p>Más de 30 años realizando proyectos metálicos a tu medida</p>
            {/* Cambiar <button> por <a> para redirección */}
            <a href="/contactenos" className="btn-primary">
              Contáctanos
            </a>
          </div>
          <div className="logo-background">
            <img src="/images/12.png" alt="Logo" className="logo" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
