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

    return () => {
      if (videoDesktop && videoMobile) {
        videoDesktop.removeEventListener("error", handleVideoError);
        videoMobile.removeEventListener("error", handleVideoError);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
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
          <video autoPlay loop muted className="video-background desktop-video">
            <source src="/images/video-horizontal.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video autoPlay loop muted className="video-background mobile-video">
            <source src="/images/video-vertical.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="content">
          <div className="header-text">
            <h1>Mind</h1>
            <p>Piezas de Metal, Piezas de Futuro</p>
            <button className="btn-primary">Contáctanos</button>
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
