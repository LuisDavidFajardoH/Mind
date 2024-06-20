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
        <h1>Mind</h1>
        <p>Metalmecánica Ingeniería Diseño</p>
        <button className="btn-primary">Contactanos</button>
      </div>
      
    </header>
  );
};

export default Header;
