import React from 'react';
import './Header.css';

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
          <p>Metalmecánica Ingeniería Diseño</p>
          <button className="btn-primary">Contactanos</button>
        </div>
        <div className="logo-background">
          <img src="/images/12.png" alt="Logo" className="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
