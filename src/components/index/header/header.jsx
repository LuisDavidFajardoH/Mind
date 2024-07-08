import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="video-container">
        <video autoPlay loop muted className="video-background">
          <source src="/images/video.mp4" type="video/mp4" />
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
  );
};

export default Header;
